import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [items, setItem] = useState([]);

  

  function addItem(inputText) {
    if (inputText !== "") {
      setItem((prevItem) => {
        return [...prevItem, { id: uuidv4(), content: inputText }];
      });
    }
  }

  function deleteItem(id) {
    setItem((prevItem) => {
      // Filter through an "items" array to get rid of the one that match with "id"
      return prevItem.filter(
        // Loop through each item in previous "items" array and get the "index" of each item
        (items, index) => {
          // Return only item that index "not match" with the id (the item that "match" the id is equal to got delete)
          return index !== id;
        });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) =>
            <ToDoItem
              key={todoItem.id}
              id={index}
              text={todoItem.content}
              onChecked={deleteItem}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;