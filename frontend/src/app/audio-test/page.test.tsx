import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { type BeepEngine, createBeepEngine } from "beep-engine";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AudioTestPage from "./page";

vi.mock("beep-engine", () => ({
  createBeepEngine: vi.fn(),
}));

const createEngine = vi.mocked(createBeepEngine);
const setVolume = vi.fn<BeepEngine["setVolume"]>();
const startupBeep = vi.fn<BeepEngine["startupBeep"]>();
const crashSound = vi.fn<BeepEngine["crashSound"]>();

const engine: BeepEngine = {
  setVolume,
  startupBeep,
  crashSound,
};

async function openListeningRoom() {
  render(<AudioTestPage />);

  await waitFor(() => {
    expect(screen.getByRole("status")).toHaveTextContent(/^Ready\.$/);
  });
}

beforeEach(() => {
  vi.resetAllMocks();
  createEngine.mockResolvedValue(engine);
  startupBeep.mockResolvedValue(undefined);
  crashSound.mockResolvedValue(undefined);
});

describe("the solemn administration of the BeepEngine listening room", () => {
  describe("the reception desk awaiting an engine with valid papers", () => {
    it("disables playback while initialization is pending", () => {
      createEngine.mockReturnValue(new Promise<BeepEngine>(() => undefined));

      render(<AudioTestPage />);

      expect(screen.getByRole("status")).toHaveTextContent(
        /^Loading BeepEngine\.\.\.$/,
      );
      expect(screen.getByRole("button", { name: "Play" })).toBeDisabled();
      expect(startupBeep).not.toHaveBeenCalled();
      expect(crashSound).not.toHaveBeenCalled();
    });

    it("enables playback and displays the initial settings when ready", async () => {
      await openListeningRoom();

      expect(
        screen.getByRole("heading", { level: 1, name: "BeepEngine" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { level: 2, name: "The audio test" }),
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Play" })).toBeEnabled();
      expect(screen.getByRole("combobox", { name: "Sound" })).toHaveValue(
        "startupBeep",
      );
      expect(screen.getByRole("combobox", { name: "Sample rate" })).toHaveValue(
        "48000",
      );
      expect(screen.getByRole("slider", { name: "Volume: 100%" })).toHaveValue(
        "100",
      );
    });

    it.each([
      [new Error("Reception is closed"), "Reception is closed"],
      ["Missing arrival permit", "Missing arrival permit"],
    ])("reports initialization failure for %s", async (error, message) => {
      createEngine.mockRejectedValue(error);

      render(<AudioTestPage />);

      await waitFor(() => {
        expect(screen.getByRole("status")).toHaveTextContent(
          `Initialization failed: ${message}`,
        );
      });

      expect(screen.getByRole("button", { name: "Play" })).toBeDisabled();
    });
  });

  describe("the dispatch office entrusted with exactly two authorized noises", () => {
    it("plays the startup beep at the default sample rate and volume", async () => {
      await openListeningRoom();

      fireEvent.click(screen.getByRole("button", { name: "Play" }));

      await waitFor(() => {
        expect(screen.getByRole("status")).toHaveTextContent(
          /^Started startupBeep at 48000 Hz\.$/,
        );
      });

      expect(setVolume).toHaveBeenCalledWith(1);
      expect(startupBeep).toHaveBeenCalledExactlyOnceWith(48000);
      expect(crashSound).not.toHaveBeenCalled();
    });

    it("plays the selected crash sound at the selected sample rate", async () => {
      await openListeningRoom();

      fireEvent.change(screen.getByRole("combobox", { name: "Sound" }), {
        target: { value: "crashSound" },
      });
      fireEvent.change(screen.getByRole("combobox", { name: "Sample rate" }), {
        target: { value: "44100" },
      });
      fireEvent.click(screen.getByRole("button", { name: "Play" }));

      await waitFor(() => {
        expect(screen.getByRole("status")).toHaveTextContent(
          /^Started crashSound at 44100 Hz\.$/,
        );
      });

      expect(crashSound).toHaveBeenCalledExactlyOnceWith(44100);
      expect(startupBeep).not.toHaveBeenCalled();
    });

    it("reports a playback failure while keeping the command available", async () => {
      startupBeep.mockRejectedValue(new Error("Audible permit refused"));

      await openListeningRoom();

      fireEvent.click(screen.getByRole("button", { name: "Play" }));

      await waitFor(() => {
        expect(screen.getByRole("status")).toHaveTextContent(
          /^Playback failed: Audible permit refused$/,
        );
      });

      expect(screen.getByRole("button", { name: "Play" })).toBeEnabled();
    });
  });

  describe("the Ministry of Volume and its formally recognized right to silence", () => {
    it.each([0, 25, 100])(
      "displays %i percent and applies its gain on change and playback",
      async (volume) => {
        await openListeningRoom();

        fireEvent.change(screen.getByRole("slider"), {
          target: { value: "50" },
        });
        setVolume.mockClear();

        fireEvent.change(screen.getByRole("slider"), {
          target: { value: String(volume) },
        });

        expect(
          screen.getByRole("slider", { name: `Volume: ${volume}%` }),
        ).toHaveValue(String(volume));
        expect(setVolume).toHaveBeenLastCalledWith(volume / 100);

        setVolume.mockClear();

        fireEvent.click(screen.getByRole("button", { name: "Play" }));

        await waitFor(() => {
          expect(startupBeep).toHaveBeenCalledExactlyOnceWith(48000);
        });

        expect(setVolume).toHaveBeenCalledExactlyOnceWith(volume / 100);
      },
    );
  });
});
