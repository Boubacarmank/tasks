import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track the user's input
    const [userAnswer, setUserAnswer] = useState<string>("");

    // Handle input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            {/* Input box for the user's answer */}
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Type your answer"
            />
            {/* Feedback based on the user's answer */}
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
