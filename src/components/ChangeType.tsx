import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question"; // Ensure this interface is defined with values "short_answer_question" and "multiple_choice_question"

describe("ChangeType Component tests", () => {
    test("The initial type is Short Answer", () => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        render(<ChangeType />);
        expect(screen.getByText("Short Answer")).toBeInTheDocument();
    });
});

export function ChangeType(): React.JSX.Element {
    // Initialize the state to "short_answer_question" as the initial type
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    // Function to toggle the question type between "short_answer_question" and "multiple_choice_question"
    const toggleQuestionType = () => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            {/* Display either "Short Answer" or "Multiple Choice" based on the questionType state */}
            <p>
                {questionType === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>
            {/* Button to change the type */}
            <Button onClick={toggleQuestionType}>Change Type</Button>
        </div>
    );
}
