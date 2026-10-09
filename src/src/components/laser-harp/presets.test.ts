import { test } from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_PRESET,
  LASER_COLORS,
  NOTE_OPTIONS,
  parsePresets,
} from "./presets";

const makePreset = (count = 5) => ({
  name: "Custom",
  beams: Array.from({ length: count }, () => ({ note: "C4" })),
});

test("custom presets preserve note order and duplicates and default to green", () => {
  const input = [makePreset()];
  const parsed = parsePresets(input);
  assert.equal(parsed[0].beams.length, 5);
  assert.ok(
    parsed[0].beams.every(beam => beam.note === "C4" && beam.color === "green")
  );
  parsed[0].beams[0].note = "D4";
  assert.equal(
    input[0].beams[0].note,
    "C4",
    "normalization must not mutate caller data"
  );
});

test("accepts five custom presets with five to ten beams and every palette color", () => {
  for (const count of [5, 6, 7, 8, 9, 10]) {
    assert.equal(
      parsePresets(Array.from({ length: 5 }, () => makePreset(count))).length,
      5
    );
  }
  for (const color of Object.keys(LASER_COLORS)) {
    const preset = {
      name: color,
      beams: Array.from({ length: 5 }, () => ({ note: "C4", color })),
    };
    assert.equal(parsePresets([preset])[0].beams[0].color, color);
  }
  assert.equal(
    parsePresets([
      {
        name: "Default color",
        beams: Array.from({ length: 5 }, () => ({
          note: "C4",
          color: undefined,
        })),
      },
    ])[0].beams[0].color,
    "green"
  );
  assert.deepEqual(parsePresets([]), []);
});

test("rejects invalid saved data and limits instead of silently truncating it", () => {
  for (const value of [
    null,
    {},
    [null],
    Array.from({ length: 6 }, () => makePreset()),
    [makePreset(4)],
    [makePreset(11)],
  ]) {
    assert.throws(() => parsePresets(value));
  }
  for (const beam of [
    { note: "C99" },
    { note: "C#4" },
    { note: "C4", color: "purple" },
    { note: "C4", color: "__proto__" },
    { note: "C4", color: null },
  ]) {
    assert.throws(() =>
      parsePresets([{ name: "Invalid", beams: Array(5).fill(beam) }])
    );
  }
  for (const name of [" ", "x".repeat(41), 123]) {
    assert.throws(() => parsePresets([{ ...makePreset(), name }]));
  }
});

test("the original Jarre default keeps its nine notes", () => {
  assert.deepEqual(
    DEFAULT_PRESET.beams.map(beam => beam.note),
    ["C1", "F1", "G1", "Ab1", "Bb1", "B1", "C2", "D2", "Eb2"]
  );
  assert.ok(DEFAULT_PRESET.beams.every(beam => beam.color === "green"));
  assert.equal(NOTE_OPTIONS.length, 128);
  assert.equal(NOTE_OPTIONS[0], "C-1");
  assert.equal(NOTE_OPTIONS[60], "C4");
  assert.equal(NOTE_OPTIONS[127], "G9");
});
