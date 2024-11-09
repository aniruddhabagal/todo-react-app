/* eslint-disable react/prop-types */
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <div className="task-content">
        <div
          className={`checkbox ${task.completed ? "checked" : ""}`}
          onClick={() => onToggle(task.id)}
        >
          {task.completed && "✓"}
        </div>
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      </div>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        ✖
      </button>
    </div>
  );
};

export default TaskItem;
