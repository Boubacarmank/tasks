import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface TwoDiceProps {
    initialLeftDie?: number;
    initialRightDie?: number;
    rollDie?: () => number; // Allow injection of a custom rollDie function
}

export function TwoDice({
    initialLeftDie = 3,
    initialRightDie = 4,
    rollDie = () => Math.floor(Math.random() * 6) + 1, // Default roll function
}: TwoDiceProps): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(initialLeftDie);
    const [rightDie, setRightDie] = useState<number>(initialRightDie);

    const hasWon = leftDie === rightDie && leftDie !== 1;
    const hasLost = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <Button
                onClick={() => {
                    setLeftDie(rollDie());
                }}
                data-testid="roll-left"
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(rollDie());
                }}
                data-testid="roll-right"
            >
                Roll Right
            </Button>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            {hasWon && <p>Win</p>}
            {hasLost && <p>Lose</p>}
        </div>
    );
}
