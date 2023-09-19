// This is the button for the rng generation.

import React from "react";

export default function RngItem(props) {
    return (
        <div>
            <button className="SpinButton" onClick={() => {
                props.onRngAction()
            }}>Spin</button>
        </div>
    )
}