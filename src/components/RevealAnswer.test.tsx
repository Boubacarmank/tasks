import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";

describe("RevealAnswer Component", () => {
    test("renders the 'Reveal Answer' button", () => {
        render(<RevealAnswer />);
        const button = screen.getByRole("button", { name: /reveal answer/i });
        expect(button).toBeInTheDocument();
    });

    test("does not display answer initially", () => {
        render(<RevealAnswer />);
        expect(screen.queryByText("42")).toBeNull(); // Ensures answer is hidden on load
    });

    test("reveals the answer after clicking the button once", () => {
        render(<RevealAnswer />);
        const button = screen.getByRole("button", { name: /reveal answer/i });
        fireEvent.click(button);
        expect(screen.getByText("42")).toBeInTheDocument(); // Answer should be visible
    });

    test("hides the answer after clicking the button twice", () => {
        render(<RevealAnswer />);
        const button = screen.getByRole("button", { name: /reveal answer/i });

        // First click to reveal
        fireEvent.click(button);
        expect(screen.getByText("42")).toBeInTheDocument();

        // Second click to hide
        fireEvent.click(button);
        expect(screen.queryByText("42")).toBeNull(); // Answer should be hidden again
    });

    test("toggles the answer visibility multiple times", () => {
        render(<RevealAnswer />);
        const button = screen.getByRole("button", { name: /reveal answer/i });

        // Toggle sequence: show, hide, show, hide
        fireEvent.click(button); // Show
        expect(screen.getByText("42")).toBeInTheDocument();

        fireEvent.click(button); // Hide
        expect(screen.queryByText("42")).toBeNull();

        fireEvent.click(button); // Show again
        expect(screen.getByText("42")).toBeInTheDocument();

        fireEvent.click(button); // Hide again
        expect(screen.queryByText("42")).toBeNull();
    });
});
