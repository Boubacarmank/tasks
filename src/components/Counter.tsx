import React, { useState } from "react";

export function Counter(): React.JSX.Element {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Add One
            </button>
        </div>
    );
}
