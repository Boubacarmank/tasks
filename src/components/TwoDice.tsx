import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface TwoDiceProps {
    initialLeftDie?: number;
    initialRightDie?: number;
}

export function TwoDice({
    initialLeftDie = 3,
 solved-components
    initialRightDie = 4, // Set a different default value for the right die

    initialRightDie = 3,
 main
}: TwoDiceProps): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(initialLeftDie);
    const [rightDie, setRightDie] = useState<number>(initialRightDie);

 solved-components
    const rollDie = () => Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6


 main
    const hasWon = leftDie === rightDie && leftDie !== 1;
    const hasLost = leftDie === 1 && rightDie === 1;

    return (
        <div>
 solved-components
            <Button
                onClick={() => setLeftDie(rollDie())}
                data-testid="roll-left"
            >
                Roll Left
            </Button>
            <Button
                onClick={() => setRightDie(rollDie())}

            <Button onClick={() => setLeftDie(leftDie)} data-testid="roll-left">
                Roll Left
            </Button>
            <Button
                onClick={() => setRightDie(rightDie)}
 main
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
