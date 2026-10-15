import { useEffect, useMemo, useState } from "react";
import type { QuizKind, QuizQuestion } from "./types";

interface BankModule {
  questions: QuizQuestion[];
}

/** Cada `banks/<nombre>.ts` debe exportar `questions`. */
const banks = import.meta.glob<BankModule>("./banks/*.ts", { eager: true });

function loadBank(bank: string): QuizQuestion[] {
  const file = bank.split("/").pop()?.replace(/\.ts$/, "") ?? bank;
  const mod = banks[`./banks/${file}.ts`];
  if (!mod?.questions) {
    const available = Object.keys(banks)
      .map(path => path.slice("./banks/".length, -".ts".length))
      .join(", ");
    throw new Error(
      `No existe la batería "${bank}". Disponibles: ${available || "ninguna"}.`
    );
  }
  return mod.questions;
}

const KIND_LABEL: Record<QuizKind, string> = {
  single: "Opción múltiple",
  multi: "Respuesta múltiple",
  boolean: "Verdadero o falso",
};

function setsEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const selected = new Set(a);
  return b.every(id => selected.has(id));
}

function correctIds(question: QuizQuestion): string[] {
  return question.options
    .filter(option => option.correct)
    .map(option => option.id);
}

function GradeIcon({ correct }: { correct: boolean }) {
  const title = correct ? "Respuesta correcta" : "Respuesta incorrecta";
  return (
    <span
      role="img"
      aria-label={title}
      title={title}
      className={
        correct
          ? "inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"
          : "inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
      }
    >
      {correct ? (
        <svg viewBox="0 0 20 20" className="size-4" aria-hidden="true">
          <path
            d="M4 10.5 8 14.5 16 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" className="size-4" aria-hidden="true">
          <path
            d="M5.5 5.5 14.5 14.5 M14.5 5.5 5.5 14.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

export default function QuizWizard({ bank }: { bank: string }) {
  const questions = useMemo(() => loadBank(bank), [bank]);
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [graded, setGraded] = useState<Record<string, boolean>>({});
  const [explained, setExplained] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIndex(0);
    setAnswers({});
    setGraded({});
    setExplained({});
  }, [bank]);

  if (total === 0) {
    return (
      <p className="not-prose my-8 font-app text-foreground">
        La batería «{bank}» no tiene preguntas.
      </p>
    );
  }

  const question = questions[Math.min(index, total - 1)];
  const selected = answers[question.id] ?? [];
  const isGraded = graded[question.id] ?? false;
  const showExplanation = explained[question.id] ?? false;
  const expected = correctIds(question);
  const isCorrect = isGraded && setsEqual(selected, expected);

  function select(optionId: string) {
    setGraded(current => ({ ...current, [question.id]: false }));
    setAnswers(current => {
      const previous = current[question.id] ?? [];
      const next =
        question.kind === "multi"
          ? previous.includes(optionId)
            ? previous.filter(id => id !== optionId)
            : [...previous, optionId]
          : [optionId];
      return { ...current, [question.id]: next };
    });
  }

  function grade() {
    if (selected.length === 0 || isGraded) return;
    setGraded(current => ({ ...current, [question.id]: true }));
  }

  const answeredCount = Object.values(graded).filter(Boolean).length;
  const correctCount = questions.filter(
    item =>
      graded[item.id] && setsEqual(answers[item.id] ?? [], correctIds(item))
  ).length;
  const progress = Math.round(((index + 1) / total) * 100);

  return (
    <div
      data-pagefind-ignore
      className="not-prose my-8 font-app text-foreground"
    >
      <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
        <div className="h-1.5 bg-muted" aria-hidden="true">
          <div
            className="h-full bg-accent transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 sm:px-6">
          <p className="text-sm text-foreground/70">
            Pregunta {index + 1} de {total}
          </p>
          <p className="text-sm text-foreground/70">
            {answeredCount === 0
              ? "Sin respuestas todavía"
              : `${correctCount} de ${answeredCount} correctas`}
          </p>
        </div>

        <fieldset className="px-4 py-5 sm:px-6">
          <legend className="float-none mb-4 block w-full text-start">
            <span className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-app text-xs tracking-wide text-foreground/80 uppercase">
                {KIND_LABEL[question.kind]}
              </span>
              <span className="text-xs text-foreground/60">
                {question.section}
              </span>
            </span>
            <span className="block text-lg leading-snug font-medium text-foreground">
              {question.prompt}
            </span>
          </legend>

          <div className="mt-5 flex flex-col gap-2">
            {question.options.map(option => {
              const checked = selected.includes(option.id);
              return (
                <label
                  key={option.id}
                  className={
                    checked
                      ? "flex cursor-pointer items-start gap-3 rounded-md border border-accent bg-accent/10 px-3 py-2.5"
                      : "flex cursor-pointer items-start gap-3 rounded-md border border-border px-3 py-2.5 hover:border-accent/60"
                  }
                >
                  <input
                    type={question.kind === "multi" ? "checkbox" : "radio"}
                    name={question.id}
                    value={option.id}
                    checked={checked}
                    onChange={() => select(option.id)}
                    className="mt-1 size-4 shrink-0 accent-accent"
                  />
                  <span className="text-[0.975rem] leading-snug">
                    {option.text}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-2 border-t border-border px-4 py-3 sm:px-6">
          {isGraded ? (
            <p
              className={
                isCorrect
                  ? "flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400"
                  : "flex items-center gap-2 text-sm font-medium text-red-700 dark:text-red-400"
              }
            >
              <GradeIcon correct={isCorrect} />
              {isCorrect ? "Correcta" : "Incorrecta"}
            </p>
          ) : (
            <button
              type="button"
              onClick={grade}
              disabled={selected.length === 0}
              className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Comprobar
            </button>
          )}

          <button
            type="button"
            onClick={() =>
              setExplained(current => ({
                ...current,
                [question.id]: !current[question.id],
              }))
            }
            aria-expanded={showExplanation}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:border-accent"
          >
            {showExplanation ? "Ocultar explicación" : "Explicar"}
          </button>
        </div>

        {showExplanation && (
          <div className="border-t border-border bg-muted/60 px-4 py-4 text-[0.975rem] leading-relaxed sm:px-6">
            <p className="mb-2 font-app text-sm font-semibold">
              {expected.length > 1
                ? "Respuestas correctas"
                : "Respuesta correcta"}
            </p>
            <ul className="mb-3 list-disc ps-5">
              {question.options
                .filter(option => option.correct)
                .map(option => (
                  <li key={option.id}>{option.text}</li>
                ))}
            </ul>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setIndex(current => current - 1)}
            disabled={index === 0}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setIndex(current => current + 1)}
            disabled={index === total - 1}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
