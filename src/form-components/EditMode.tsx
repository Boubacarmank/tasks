import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const toggleEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEditMode(event.target.checked);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={(event) => {
                    toggleEditMode(event);
                }}
            />
            {isEditMode ?
                <div>
                    <Form.Group controlId="userName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(event) => {
                                handleNameChange(event);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={(event) => {
                            handleStudentChange(event);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student&#125;"}.
                </div>
            }
        </div>
    );
}
