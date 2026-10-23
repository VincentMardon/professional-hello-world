/**
 * Playback method names offered by the audio test panel.
 *
 * @remarks
 * These identifiers select methods on the engine interface. They are not
 * filenames or display labels. Adding another choice also requires a
 * compatible engine method and an update to the selection control.
 */
export type Sound = "startupBeep" | "crashSound";
