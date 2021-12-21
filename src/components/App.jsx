import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItem] = useState([]);
  const [id, setId] = useState(1);

  function handleChange(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function addItem() {
    setId(id + 1);
    setItem((prevItem) => {
      return [...prevItem, { id: id, content: inputText }];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem =>
            <ToDoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.content}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;