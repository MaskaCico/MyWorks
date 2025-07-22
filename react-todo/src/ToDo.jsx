import React from "react";
import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-container">
      <h1>What to Do?</h1>
      <div className="input-container">
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
              <span className="icon">🔼</span>
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
              disabled={index === tasks.length - 1}
            >
              <span className="icon">🔽</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
