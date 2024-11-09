import { Question } from "./interfaces/question";

/**
 * Retrieves all published questions from the list.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/**
 * Retrieves all non-empty questions from the list.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body !== "" ||
            question.options.length > 0 ||
            question.expected !== "",
    );
}

/**
 * Finds a question by its ID in the list.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((question) => question.id === id) || null;
}

/**
 * Removes a question by ID.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/**
 * Retrieves the names of all questions.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/**
 * Creates an array of answers for each question, initially unfilled.
 */
export function makeAnswers(questions: Question[]): {
    questionId: number;
    correct: boolean;
    text: string;
    submitted: boolean;
}[] {
    return questions.map((question) => ({
        questionId: question.id,
        correct: false,
        text: "",
        submitted: false,
    }));
}

/**
 * Publishes all questions in the list.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

/**
 * Adds a new question to the list.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: "short_answer_question" | "multiple_choice_question",
): Question[] {
    return [
        ...questions,
        {
            id,
            name,
            body: "",
            type,
            options: [],
            expected: "",
            points: 1,
            published: false,
        },
    ];
}

/**
 * Renames a question by its ID.
 */
export function renameQuestionById(
    questions: Question[],
    id: number,
    newName: string,
): Question[] {
    return questions.map((question) =>
        question.id === id ? { ...question, name: newName } : question,
    );
}

/**
 * Modifies the options of a question by adding or replacing an option at a given index.
 * If the index is -1, the option is appended; otherwise, the specified index is replaced.
 * @param questions - Array of questions
 * @param questionId - ID of the question to edit
 * @param optionIndex - Index of the option to replace, or -1 to append
 * @param newOption - New option string to add or replace
 * @returns A new array with the updated question options
 */
export function editOption(
    questions: Question[],
    questionId: number,
    optionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((question) => {
        if (
            question.id === questionId &&
            question.type === "multiple_choice_question"
        ) {
            const newOptions = [...question.options];
            if (optionIndex === -1) {
                newOptions.push(newOption);
            } else {
                newOptions[optionIndex] = newOption;
            }
            return { ...question, options: newOptions };
        }
        return question;
    });
}
