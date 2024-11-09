// doublehalf.test.tsx
import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { DoubleHalf } from "./DoubleHalf";

describe("DoubleHalf Component tests", () => {
    beforeEach(() => {
        render(<DoubleHalf />);
    });

    test("(2 pts) The DoubleHalf value is initially 10", () => {
        expect(screen.getByText("10")).toBeInTheDocument();
    });

    test("(2 pts) There are Double and Halve buttons", () => {
        expect(
            screen.getByRole("button", { name: /Double/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Halve/i }),
        ).toBeInTheDocument();
    });

    test("(2 pts) You can double the number.", async () => {
        const doubleButton = screen.getByRole("button", { name: /Double/i });
        await act(async () => {
            doubleButton.click();
        });
        expect(screen.getByText("20")).toBeInTheDocument();
    });

    test("(2 pts) You can halve the number.", async () => {
        const halveButton = screen.getByRole("button", { name: /Halve/i });
        await act(async () => {
            halveButton.click();
        });
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    test("(2 pts) You can double AND halve the number.", async () => {
        const doubleButton = screen.getByRole("button", { name: /Double/i });
        const halveButton = screen.getByRole("button", { name: /Halve/i });

        // Double the initial value (10 -> 20)
        await act(async () => {
            doubleButton.click();
        });
        expect(screen.getByText("20")).toBeInTheDocument();

        // Double again (20 -> 40)
        await act(async () => {
            doubleButton.click();
        });
        expect(screen.getByText("40")).toBeInTheDocument();

        // Halve (40 -> 20)
        await act(async () => {
            halveButton.click();
        });
        expect(screen.getByText("20")).toBeInTheDocument();

        // Halve again (20 -> 10)
        await act(async () => {
            halveButton.click();
        });
        expect(screen.getByText("10")).toBeInTheDocument();

        // Continue halving down to 2.5
        await act(async () => {
            halveButton.click();
        });
        expect(screen.getByText("5")).toBeInTheDocument();

        await act(async () => {
            halveButton.click();
        });
        expect(screen.getByText("2.5")).toBeInTheDocument();
    });
});
