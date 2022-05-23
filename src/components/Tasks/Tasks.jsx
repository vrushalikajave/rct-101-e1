import React from "react";
import styles from "./tasks.module.css";
import Counter from "../Counter/Counter";
const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
  
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {props.task.map((elem)=>(
         <div>
           <p >{elem.text}</p>
          <input type="radio" />
          <Counter/>
         </div>
        
        ))

        }
        

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
