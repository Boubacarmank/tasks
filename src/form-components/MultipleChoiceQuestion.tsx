import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track the user's selected answer
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    // Update the selected answer when the user makes a choice
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select value={selectedAnswer} onChange={handleChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {/* Display ✔️ if the answer is correct, otherwise ❌ */}
                {selectedAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
