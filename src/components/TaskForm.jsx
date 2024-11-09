import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAdd(newTask);
      setNewTask("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
