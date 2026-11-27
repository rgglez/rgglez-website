import { useEffect, useState, type FormEvent } from "react";

const inputs = ["PV", "EV", "AC", "BAC"] as const;

/** Etiquetas ya traducidas en servidor por `EarnedValueForm.astro` (gettext). */
export interface EarnedValueLabels {
  inputs: Record<(typeof inputs)[number], string>;
  legend: string;
  intro: string;
  assumption: string;
  atCpi: string;
  atBudget: string;
  calculate: string;
  indicator: string;
  formula: string;
  result: string;
  undefined: string;
  done: string;
}

function calculate(
  PV: number,
  EV: number,
  AC: number,
  BAC: number,
  atBudget: boolean
) {
  const CPI = AC > 0 ? EV / AC : NaN;
  const SPI = PV > 0 ? EV / PV : NaN;
  const EAC = atBudget
    ? AC + (BAC - EV)
    : Number.isFinite(CPI) && CPI > 0
      ? BAC / CPI
      : NaN;

  return {
    CV: EV - AC,
    SV: EV - PV,
    CPI,
    SPI,
    EAC,
    ETC: EAC - AC,
    VAC: BAC - EAC,
  };
}

export default function EarnedValueForm({
  labels,
  locale,
}: {
  labels: EarnedValueLabels;
  /** Locale BCP 47 para `Intl.NumberFormat`, p. ej. `es-MX`. */
  locale: string;
}) {
  const amountFormat = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const indexFormat = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
  const [ready, setReady] = useState(false);
  const [atBudget, setAtBudget] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculate> | null>(
    null
  );

  useEffect(() => setReady(true), []);

  const metrics = [
    ["CV", "EV − AC"],
    ["SV", "EV − PV"],
    ["CPI", "EV / AC"],
    ["SPI", "EV / PV"],
    ["EAC", atBudget ? "AC + (BAC − EV)" : "BAC / CPI"],
    ["ETC", "EAC − AC"],
    ["VAC", "BAC − EAC"],
  ] as const;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const [PV, EV, AC, BAC] = inputs.map(name => Number(data.get(name)));
    setResults(calculate(PV, EV, AC, BAC, atBudget));
  }

  return (
    <form onSubmit={onSubmit} onChange={() => setResults(null)}>
      <fieldset
        disabled={!ready}
        className="my-6 rounded-lg border border-border px-4 pb-4 sm:px-6"
      >
        <legend className="px-2 font-semibold">{labels.legend}</legend>
        <p>{labels.intro}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {inputs.map(name => (
            <label key={name} className="flex flex-col gap-1">
              <span>
                {labels.inputs[name]} ({name})
              </span>
              <input
                name={name}
                type="number"
                min="0"
                step="any"
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2 tabular-nums"
              />
            </label>
          ))}
        </div>

        <label className="mt-4 flex flex-col gap-1">
          <span>{labels.assumption}</span>
          <select
            value={atBudget ? "budget" : "cpi"}
            onChange={event =>
              setAtBudget(event.currentTarget.value === "budget")
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2"
          >
            <option value="cpi">{labels.atCpi}</option>
            <option value="budget">{labels.atBudget}</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-4 rounded-md bg-accent px-4 py-2 font-medium text-white"
        >
          {labels.calculate}
        </button>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col">{labels.indicator}</th>
                <th scope="col">{labels.formula}</th>
                <th scope="col" className="text-right">
                  {labels.result}
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map(([metric, formula]) => {
                const format =
                  metric === "CPI" || metric === "SPI"
                    ? indexFormat
                    : amountFormat;
                const value = results?.[metric];
                return (
                  <tr key={metric}>
                    <th scope="row">{metric}</th>
                    <td>{formula}</td>
                    <td className="text-right tabular-nums">
                      {value === undefined
                        ? "—"
                        : Number.isFinite(value)
                          ? format.format(value)
                          : labels.undefined}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p role="status" className="sr-only">
          {results && labels.done}
        </p>
      </fieldset>
    </form>
  );
}
