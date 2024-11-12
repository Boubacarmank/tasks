import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<"Short Answer" | "Multiple Choice">(
        "Short Answer",
    );

    const toggleType = () => {
        setType((prevType) =>
            prevType === "Short Answer" ? "Multiple Choice" : "Short Answer",
        );
    };

    return (
        <div>
            <div>{type}</div>{" "}
            {/* Displays "Short Answer" or "Multiple Choice" */}
            <Button onClick={toggleType}>Change Type</Button>{" "}
            {/* Button with label "Change Type" */}
        </div>
    );
}
