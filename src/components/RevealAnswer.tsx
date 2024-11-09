import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // State to control the visibility of the answer
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Toggle visibility of the answer
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {/* Conditionally render the answer based on visibility */}
            {isVisible && <p>42</p>}
        </div>
    );
}
