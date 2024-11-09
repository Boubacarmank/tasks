import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    const handleClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <img src="path/to/image.jpg" alt="Descriptive text" />{" "}
            {/* Image with alt */}
            <div style={{ backgroundColor: "red" }} className="red-background">
                This div has a red background
            </div>
            <Button onClick={handleClick}>Log Hello World</Button>{" "}
            {/* Log Hello World button */}
            <ul>
                <li>Default Member 1</li>
                <li>Default Member 2</li>
                <li>Default Member 3</li>
            </ul>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
