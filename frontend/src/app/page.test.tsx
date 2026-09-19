import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("the solemn assembly of the Professional Hello World page", () => {
  describe("the greeting entrusted with addressing the entire world", () => {
    it("preserves the complete greeting and its ceremonial punctuation", () => {
      render(<HomePage />);

      const greeting = screen.getByText("Professional", { exact: true });

      expect(greeting).toHaveTextContent(/^Professional "Hello, World!"$/);
    });

    it("reserves strong importance for the quoted greeting alone", () => {
      render(<HomePage />);

      const greeting = screen.getByText("Professional", { exact: true });
      const proclamation = screen.getByRole("strong");

      expect(proclamation).toHaveTextContent(/^"Hello, World!"$/);
      expect(greeting).toContainElement(proclamation);
    });
  });

  describe("the promise of wonders awaiting an officially appointed dawn", () => {
    it("announces the pending arrival with semantic emphasis", () => {
      render(<HomePage />);

      const announcement = screen.getByRole("emphasis");

      expect(announcement).toHaveTextContent(/^Coming soon \.\.\.$/);
    });
  });

  describe("the silent interval granted between two historic announcements", () => {
    it("places an empty decorative interval between greeting and promise", () => {
      render(<HomePage />);

      const greeting = screen.getByText("Professional", { exact: true });
      const announcement = screen.getByText("Coming soon ...", {
        exact: true,
      });
      const interval = greeting.nextElementSibling;

      expect(interval).toBeInTheDocument();
      expect(interval).toBeEmptyDOMElement();
      expect(interval).toHaveAttribute("aria-hidden", "true");
      expect(interval?.nextElementSibling).toContainElement(announcement);
    });
  });
});
