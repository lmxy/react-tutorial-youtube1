import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(
    [{id: 1, name: "Todo1", completed: false}]);

    const todoNameRef = useRef();

    const handleAddTodo = () => {
      // add task.
      const name = todoNameRef.current.value;
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
      });
      todoNameRef.current.value = null;
    }

  return(
    <div>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add task</button>
      <button>Delete completed task</button>
      <div>Remained task:0</div>
    </div>
    )
}

export default App;
