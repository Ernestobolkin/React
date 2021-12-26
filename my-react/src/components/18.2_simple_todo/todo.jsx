import React, { useState } from "react";
import "./todo.css";
export const TodoApp = () => {
  const [task, setTask] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  const completeFunc = (name, complete) => {
    const tempArr = task.map((item) => {
      if (item.name === name) {
        item.completed = !complete;
      }
      return item;
    });
    setTask(tempArr);
  };
  const renderItems = () => {
    return (
      <div>
        {task.map((item) => {
          return (
            <div key={item.name} className="container">
              <span className={item.completed ? "line-through" : ""}>
                {item.name}{" "}
                <i
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => completeFunc(item.name, item.completed)}
                  className={item.completed ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
            </div>
          );
        })}
      </div>
    );
  };
  // <i class="fas fa-times"></i>
  return <div>{renderItems()}</div>;
};
