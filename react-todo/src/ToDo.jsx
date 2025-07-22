import React from "react";
import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState(["Egyes", "Kettes", "Hármas"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function removeTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="todo-container">
      <h1>What to Do?</h1>

      <div>
        <input
          type="text"
          placeholder="Give me a task...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="remove-button" onClick={() => removeTask(index)}>
              Remove
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskUp(index)}
              disabled={index === 0}
            >
              🔼
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
              disabled={index === tasks.length - 1}
            >
              🔽
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
