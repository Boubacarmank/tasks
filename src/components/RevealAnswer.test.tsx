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
 solved-components
    test("(1 pts) There is a Reveal Answer button", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i,
        });
        expect(revealButton).toBeInTheDocument();
    });
    test("(1 pts) Clicking Reveal Answer button reveals the '42'", async () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i,
        });
        await act(async () => {
            revealButton.click();
        });
        const answerText = screen.getByText(/42/);
        expect(answerText).toBeInTheDocument();
    });
    test("(1 pts) Clicking Reveal Answer button twice hides the '42'", async () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i,
        });
        await act(async () => {
            revealButton.click();
        });
        await act(async () => {
            revealButton.click();
        });
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();


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
 main
    });
});
