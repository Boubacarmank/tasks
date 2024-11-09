/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// DoubleHalf.tsx
import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    const { value, double, halve } = useDoubleHalfState();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Button onClick={double}>Double</Button>
            <Button onClick={halve}>Halve</Button>
        </div>
    );
}
