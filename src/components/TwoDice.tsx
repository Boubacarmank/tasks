import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface TwoDiceProps {
    initialLeftDie?: number;
    initialRightDie?: number;
}

export function TwoDice({
    initialLeftDie = 3,
    initialRightDie = 3,
}: TwoDiceProps): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(initialLeftDie);
    const [rightDie, setRightDie] = useState<number>(initialRightDie);

    const hasWon = leftDie === rightDie && leftDie !== 1;
    const hasLost = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <Button onClick={() => setLeftDie(leftDie)} data-testid="roll-left">
                Roll Left
            </Button>
            <Button
                onClick={() => setRightDie(rightDie)}
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
