import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TwoDice } from "./TwoDice";

describe("TwoDice Component Tests", () => {
    const rollDieMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        rollDieMock.mockClear();
    });

    test("Initial render displays two dice with expected values", () => {
        render(<TwoDice initialLeftDie={3} initialRightDie={4} />);
        expect(screen.getByTestId("left-die").textContent).toBe("3");
        expect(screen.getByTestId("right-die").textContent).toBe("4");
    });

    test("Displays 'Win' message when both dice match (and are not 1)", () => {
        render(<TwoDice initialLeftDie={3} initialRightDie={3} />);
        expect(screen.getByText("Win")).toBeInTheDocument();
    });

    test("Displays 'Lose' message when both dice show 1", () => {
        render(<TwoDice initialLeftDie={1} initialRightDie={1} />);
        expect(screen.getByText("Lose")).toBeInTheDocument();
    });

    test("No message is displayed when dice show different values that are not both 1", () => {
        render(<TwoDice initialLeftDie={2} initialRightDie={4} />);
        expect(screen.queryByText("Win")).toBeNull();
        expect(screen.queryByText("Lose")).toBeNull();
    });

    test("Rolling each die updates its value independently", () => {
        render(
            <TwoDice
                initialLeftDie={3}
                initialRightDie={4}
                rollDie={rollDieMock}
            />,
        );

        const rollLeftButton = screen.getByTestId("roll-left");
        const rollRightButton = screen.getByTestId("roll-right");

        rollDieMock.mockReturnValueOnce(2); // Mock left die roll to 2
        fireEvent.click(rollLeftButton);
        expect(screen.getByTestId("left-die").textContent).toBe("2");

        rollDieMock.mockReturnValueOnce(6); // Mock right die roll to 6
        fireEvent.click(rollRightButton);
        expect(screen.getByTestId("right-die").textContent).toBe("6");
    });
});
