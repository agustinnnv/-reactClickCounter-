import React from 'react';
import '../style-sheets/Button.css';
function Button({text, isAClickButton, handleClick}){
    return (
        <button className = { isAClickButton ? "clickButton" : "restartButton" }
        onClick = {handleClick}>
          {text}
        </button>
    );
}
export default Button;