import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react";
import Counter from "../Counter/Counter";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [newTodo, setTodo]=useState("");
  const[todos, setTodos]=useState([])




  const handleChange=(e)=>{
    console.log(e.target.value);

    setTodo(e.target.value)
  }
  return (
    <div className={styles.todoForm}>
      {console.log(todos)}
      
      <input data-cy="add-task-input" type="text" placeholder="Add task" onChange={handleChange}/>
      <button data-cy="add-task-button" onClick={()=> setTodos([...todos, {id:Date.now(), value:newTodo}])} >+</button>

      <div>
        {
          todos.map((elem)=>(
            <>
            <div>{elem.value}</div>
            <input type="radio" />
            <Counter/></>
            
          ))
        }
      </div>
    </div>
  );
};

export default AddTask;
