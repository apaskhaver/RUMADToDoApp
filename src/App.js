import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

let ToDoItems = styled.div`
  display: flex;
  flex-direction: column;
`;

let INITIAL_TODOS = [
  {
    title: "Item 1",
    checked: true
  },
  {
    title: "Item 2",
    checked: false
  }
];

// function Component() {
//   return <h1>Hello World!</h1>
// }

export default function App() {
  let [todos, setTodos] = useState(INITIAL_TODOS);
  let [inputVal, setInputVal] = useState("");

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoItems>
        {todos.map(function (item, index) {
          return (
            <div key={item.title}>
              <span>{item.title}</span>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={function (event) {
                  // event.target.checked

                  let clone = [...todos];
                  clone[index] = { ...clone[index] };
                  clone[index].checked = !clone[index].checked;
                  setTodos(clone);
                }}
              />
            </div>
          );
        })}
      </ToDoItems>

      <form
        onSubmit={function (event) {
          event.preventDefault();
          setTodos([...todos, { title: inputVal, checked: false }]);
          setInputVal(""); // clear input
        }}
      >
        <input
          value={inputVal}
          onChange={function (event) {
            setInputVal(event.target.value);
          }}
        />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}
