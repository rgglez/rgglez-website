# Laser harp

An Astro component with Three.js laser beams and a Tone.js synthesizer.
Code, identifiers, comments, and this documentation are in English. The
reader-facing controls remain in Spanish to match the host blog.

## Include in MDX

```mdx
import LaserHarp from "@/components/LaserHarp.astro";

<LaserHarp />
```

No `client:*` directive is needed. The custom element lazily loads its browser
module, creates instance-local resources, and disposes them when disconnected,
including during Astro `ClientRouter` navigation. To extract it into a package,
keep `LaserHarp.astro` beside this folder and install `tone`, `three`, and the
`@types/three` development dependency.

## Presets

The original **Second Rendez-Vous** preset remains available as the **Jarre**
button. It keeps its configured green beams and cannot be edited or deleted.
The default and custom preset buttons are generated from the same data.
In addition, you can create **up to five custom presets**, each with **five to
ten beams**. A preset's array length determines its visible beam count, its
note-button count, and its synth voice count. Array order is left to right;
notes are not sorted, and repeated notes can have independent colors.

Open **Presets**, click **Nuevo preset**, and choose a full name, a short name,
and a beam count. The full `name` (1–40 characters) appears below **Arpa láser**
and in the editor's preset dropdown. The `shortName` (1–16 characters) appears
on its button; hovering the button displays the full name as a tooltip.
Every beam has a note dropdown and a color dropdown. All 128 MIDI pitches are
available using scientific pitch notation (`C4` = MIDI 60). Accidentals use
flats, for example `Db4`, rather than enharmonic sharps such as `C#4`.

| Data color | Dropdown label |
| ---------- | -------------- |
| `red`      | Rojo           |
| `green`    | Verde          |
| `yellow`   | Amarillo       |
| `orange`   | Naranja        |
| `white`    | Blanco         |
| `blue`     | Azul           |

Omitting `color` defaults to `green`. Only these palette colors are accepted.
Use the preset dropdown in the modal to edit or delete a custom preset.
**Guardar cambios** commits the entire library and selects the currently
edited preset. **Cancelar** or Escape discards all changes, including pending
deletions. Decreasing a preset's beam count removes its trailing assignments
in the draft; cancel the modal to recover the previously saved configuration.
The modal uses the browser's native focus trap and blocks playing behind it.

Saved presets persist in `localStorage`. The default key is
`laser-harp:presets:v1`; the built-in Jarre preset is selected on each mount.
Storage is validated before use. If storage is unavailable, editing still works
for the current page and a visible message explains that it cannot persist.
Invalid stored data falls back to the supplied initial presets without being
overwritten until the user explicitly saves.
Older presets without `shortName` use the first 16 characters of their full
name as the initial button label. Edit this label in the modal; saving persists
both names under the existing storage key without losing note assignments.

You can supply initial presets as arrays from an MDX file:

```mdx
import LaserHarp from "@/components/LaserHarp.astro";

<LaserHarp
  storageKey="my-article:harp-presets:v1"
  presets={[
    {
      name: "Five colors",
      shortName: "Colors",
      beams: [
        { note: "C3", color: "red" },
        { note: "D3", color: "blue" },
        { note: "Eb3", color: "yellow" },
        { note: "G3", color: "orange" },
        { note: "C4" },
      ],
    },
  ]}
/>
```

Valid saved data takes precedence over the `presets` prop, including an empty
saved library. Use distinct `storageKey` values for independent libraries.
Instances keep their own in-memory state; libraries sharing a key are loaded
on mount and are not synchronized live between instances or browser tabs.

## Playing

Activate audio first. Press a beam with the primary mouse button, a finger,
or a pen. Keep contact while dragging to play other beams. **Hover is silent**,
and a press that begins outside the canvas does not activate it on entry.
Releasing contact, cancellation, or leaving the playable area releases notes.
Multiple fingers can share a beam without prematurely releasing its voice.

The note buttons also support Space, Enter, and screen-reader activation.
Switch presets using the buttons above the main controls. Switching clears
all held contacts, disposes the previous audio graph and effect tails, rebuilds
the visuals and buttons, and restores the enabled state. Audio initialization
is asynchronous; play once the status says the instrument is ready. Opening
the editor silences the harp; closing it restores audio if it was enabled.

Escape outside the modal, losing window focus, hiding the page, or deactivating
audio stops the instrument. Without WebGL, the note buttons remain playable.
Volume is independent for each instance.

## Rendering and synthesis

`presets.ts` is the shared configuration and validation boundary. `notes.ts`
contains hit-testing geometry. `editor.ts` owns an isolated editing draft;
`client.ts` coordinates contacts, storage, preset switching, and lifecycle.
`scene.ts` uses one colored shader per beam, combining a bright core with soft
Gaussian halos and faint static haze to suggest light scattered in dry smoke.
Rendering only runs on changes and resize, with no idle animation loop.

`synth.ts` creates a separate voice for every beam, including repeated pitches.
Tone.js generates all audio without samples. A master sawtooth controls a
pulse shape through oversampled waveshaping. Each master period resets the
pulses, while a ratio sweep changes their harmonics without changing the
fundamental. A quieter pulse supplies the body. Amplitude and filter envelopes,
DC removal, chorus, delay, reverb, and a limiter complete the sound. The filter
envelope peak is bounded for the full MIDI range to stay below Nyquist.

The timbre approximates the Elka Synthex rather than modeling its circuits or
reproducing its preset exactly. Residual aliasing can remain, especially at
high pitches. The historical reference is
[Paul Wiffen's account](https://www.soundonsound.com/reviews/elka-synthex-retrozone).
`Tone.Oscillator.sync()` follows the transport; it does not implement hard sync.

The configured default pitches are `C1 F1 G1 Ab1 Bb1 C2 D2 Eb2`, based on the
`SynBass1` and `Bass & Ld` solo tracks in
[Brian Havis's MIDI transcription](https://www.midi-karaoke.info/212dfee5.html).
This is a third-party transcription, not Jarre's official beam assignment.
The MIDI file is neither bundled nor automatically played.

## Verification

From the Astro project directory (`src/`):

```bash
bun test src/components/laser-harp
bun run build
```

Browser checks should cover silent hover, click/drag/release, multitouch,
shared-beam ownership, keyboard playing, all six colors, and the modal's
create/edit/delete/save/cancel operations, independent full and short names,
and migration of saved libraries without short names. Verify the five-preset limit,
five-to-ten-beam limits, reload persistence, preset changes during a held
note, recovery from invalid storage, and component removal/navigation.
Check desktop and narrow mobile layouts, including modal scrolling.

The existing `arpa-laser.mdx` includes the component. To test independently of
that article's publication settings, render it in a temporary development page
and remove the page after verification.
