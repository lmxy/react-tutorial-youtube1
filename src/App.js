import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState();

  return(
    <div>
      <TodoList />
      <input type="text" />
      <button>Add task</button>
      <button>Delete completed task</button>
      <div>Remained task:0</div>
    </div>
    )
}

export default App;
