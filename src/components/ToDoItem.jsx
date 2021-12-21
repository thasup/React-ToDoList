import React, { useState } from "react";

function ToDoItem(props) {
    const [isClicked, setCrossItem] = useState(false);

    function crossItem() {
        setCrossItem((prevValue => {
            return !prevValue;
        }));
    }

    return (
        <div onClick={crossItem}>
            <li id={props.id} style={{ textDecoration: isClicked ? "line-through" : "none" }}>
                {props.text}
            </li>
        </div>
    );
}

export default ToDoItem;