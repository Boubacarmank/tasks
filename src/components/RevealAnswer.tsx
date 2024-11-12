import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    const toggleAnswer = () => {
        setIsRevealed(!isRevealed);
    };

    return (
        <div>
            <Button onClick={toggleAnswer}>Reveal Answer</Button>
            {isRevealed && <p>42</p>}
        </div>
    );
}
