import { useState } from "react";

// Exporting the custom hook correctly
export function useDoubleHalfState() {
    const [value, setValue] = useState(10); // Initial value set to 10

    const double = () => setValue((prevValue) => prevValue * 2);
    const halve = () => setValue((prevValue) => prevValue / 2);

    return { value, double, halve };
}
