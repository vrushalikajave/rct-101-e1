import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";
import task from "./data/tasks.json"
import Tasks from "./components/Tasks/Tasks";

function App() {
  return <div >{/* Code Here */}
<h1> Todo List</h1>
  <AddTask/>
  <Tasks task={task}/>
  </div>;
}

export default App;
