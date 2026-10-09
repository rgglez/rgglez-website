/** Preset data is shared by Astro, the editor, the renderer, and the synth. */
export const MAX_CUSTOM_PRESETS = 5;
export const MIN_BEAMS = 5;
export const MAX_BEAMS = 10;

// English keys are the public data format; labels belong to the Spanish UI.
// CSS colors are fixed here instead of accepting arbitrary styles from storage.
export const LASER_COLORS = {
  red: { label: "Rojo", hex: "#ff3b48" },
  green: { label: "Verde", hex: "#43ff87" },
  yellow: { label: "Amarillo", hex: "#ffed45" },
  orange: { label: "Naranja", hex: "#ff902e" },
  white: { label: "Blanco", hex: "#ffffff" },
  blue: { label: "Azul", hex: "#498dff" },
} as const;
export type LaserColor = keyof typeof LASER_COLORS;
export interface Beam {
  note: string;
  /** Omitted colors use the classic green laser. */
  color?: LaserColor;
}
export interface Preset {
  name: string;
  /** Array order is beam order, from left to right; duplicate notes are allowed. */
  beams: Beam[];
}

// Scientific pitch notation: middle C = C4 (MIDI 60). The full MIDI range is
// available in the editor. Flats match the original Jarre note assignments.
const PITCH_CLASSES = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];
export const NOTE_OPTIONS = Array.from(
  { length: 128 },
  (_, midi) => `${PITCH_CLASSES[midi % 12]}${Math.floor(midi / 12) - 1}`
);

// Keep the existing nine-note default intact.
// Source: Brian Havis's transcription, tracks 9 and 10:
// https://www.midi-karaoke.info/212dfee5.html (not an official score).
export const DEFAULT_PRESET: Preset = {
  name: "Second Rendez-Vous · Jean-Michel Jarre",
  beams: ["C1", "F1", "G1", "Ab1", "Bb1", "B1", "C2", "D2", "Eb2"].map(
    note => ({ note, color: "green" })
  ),
};

/** Validate both server props and untrusted browser storage before use. */
export function parsePresets(value: unknown): Preset[] {
  if (!Array.isArray(value) || value.length > MAX_CUSTOM_PRESETS) {
    throw new Error("Expected an array of at most five custom presets.");
  }
  return value.map(preset => {
    if (
      !preset ||
      typeof preset.name !== "string" ||
      !preset.name.trim() ||
      preset.name.trim().length > 40
    ) {
      throw new Error("Each preset needs a name of 1–40 characters.");
    }
    if (
      !Array.isArray(preset.beams) ||
      preset.beams.length < MIN_BEAMS ||
      preset.beams.length > MAX_BEAMS
    ) {
      throw new Error(
        `Each custom preset needs ${MIN_BEAMS}–${MAX_BEAMS} beams.`
      );
    }
    const beams = preset.beams.map((beam: unknown): Beam => {
      if (
        !beam ||
        typeof beam !== "object" ||
        !("note" in beam) ||
        typeof beam.note !== "string" ||
        !NOTE_OPTIONS.includes(beam.note)
      ) {
        throw new Error("Each beam needs a supported MIDI note.");
      }
      const color =
        "color" in beam && beam.color !== undefined ? beam.color : "green";
      if (typeof color !== "string" || !Object.hasOwn(LASER_COLORS, color)) {
        throw new Error("Unsupported laser color.");
      }
      return { note: beam.note, color: color as LaserColor };
    });
    return { name: preset.name.trim(), beams };
  });
}
