import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TwoDice } from "./TwoDice";

describe("TwoDice Component Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Initial render displays two dice with valid values", () => {
        render(<TwoDice />);

        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");

        expect(leftDie).toBeInTheDocument();
        expect(rightDie).toBeInTheDocument();
        expect(Number(leftDie.textContent)).toBe(3);
        expect(Number(rightDie.textContent)).toBe(3);
    });

    test("Displays 'Win' message when both dice match (and are not 1)", () => {
        render(<TwoDice initialLeftDie={3} initialRightDie={3} />);

        const rollLeftButton = screen.getByTestId("roll-left");
        const rollRightButton = screen.getByTestId("roll-right");

        fireEvent.click(rollLeftButton);
        fireEvent.click(rollRightButton);

        expect(screen.getByText("Win")).toBeInTheDocument();
    });

    test("Displays 'Lose' message when both dice show 1", () => {
        render(<TwoDice initialLeftDie={1} initialRightDie={1} />);

        const rollLeftButton = screen.getByTestId("roll-left");
        const rollRightButton = screen.getByTestId("roll-right");

        fireEvent.click(rollLeftButton);
        fireEvent.click(rollRightButton);

        expect(screen.getByText("Lose")).toBeInTheDocument();
    });

    test("No message is displayed when dice show different values that are not both 1", () => {
        render(<TwoDice initialLeftDie={3} initialRightDie={4} />);

        const rollLeftButton = screen.getByTestId("roll-left");
        const rollRightButton = screen.getByTestId("roll-right");

        fireEvent.click(rollLeftButton);
        fireEvent.click(rollRightButton);

        expect(screen.queryByText("Win")).toBeNull();
        expect(screen.queryByText("Lose")).toBeNull();
    });

    test("Rolling each die updates its value independently", () => {
        render(<TwoDice initialLeftDie={2} initialRightDie={5} />);

        const rollLeftButton = screen.getByTestId("roll-left");
        const rollRightButton = screen.getByTestId("roll-right");

        fireEvent.click(rollLeftButton);
        expect(screen.getByTestId("left-die").textContent).toBe("2");

        fireEvent.click(rollRightButton);
        expect(screen.getByTestId("right-die").textContent).toBe("5");
    });
});
