// This populates the display list with the input from user.
import React, { useState } from "react";

export default function InputArea(props) {
    const [inputText, setInputText] = useState('');

    function handleChange(event){
        const newInput = event.target.value;
        setInputText(newInput);
    }

    return (
        <div className="form">
            <input className="InputBox" onChange={handleChange} type="text" value={inputText} />
            <button type="submit" className="InputButton" onClick={() => {
                props.onClickFunc(inputText);
                setInputText('');
            }}>
                <span>{props.name}</span>
            </button>

        </div>
    );
}