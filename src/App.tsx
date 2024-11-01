import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    const handleClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <img src="logo.png" alt="App logo" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            
            <div className="red-background">
                <p>This div has a red background.</p>

            </div>
            <ul className="blue-background">
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Log Hello World
            </button>
        </div>
    );
}

export default App;
