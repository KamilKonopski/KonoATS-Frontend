import type { Task } from "../../types/task";

interface SingleTaskProps {
  task: Task;
}

const SingleTask = ({ task }: SingleTaskProps) => {
  return (
    <li
      className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200
        ${task.done ? "bg-bg-muted" : "bg-bg hover:bg-bg-muted"}
      `}
    >
      <span className={`text-sm ${task.done ? "line-through text-text-muted" : "text-text"}`}>
        {task.title}
      </span>

      {task.done ? (
        <span className="text-xs text-text-muted">✔️</span>
      ) : (
        <span className="text-xs text-primary">⏳</span>
      )}
    </li>
  );
};

export default SingleTask;
