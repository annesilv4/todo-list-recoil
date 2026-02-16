import { useRecoilState } from "recoil";
import { tasksState } from "../../atoms/task";
import "./taskItem.css";

export function TaskItem({ task }) {
    const [tasks, setTasks] = useRecoilState(tasksState);

    const toggleTask = () => {
        const updatedTasks = tasks.map(t =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        );

        setTasks(updatedTasks);
    };

    const removeTask = () => {
        const updatedTasks = tasks.filter(t => t.id !== task.id);
        setTasks(updatedTasks);
    };

    return (
        <li className="task-item">
            <span className={`task-description ${task.completed ? "completed" : ""}`}>
                {task.description}
            </span>
            <div className="task-actions">
                <button
                    className="task-button task-button-complete"
                    onClick={toggleTask}
                    title={task.completed ? "Desmarcar como concluído" : "Marcar como concluído"}
                >
                    {task.completed ? "Desmarcar" : "Concluir"}
                </button>
                <button
                    className="task-button task-button-remove"
                    onClick={removeTask}
                    title="Remover tarefa"
                >
                    Remover
                </button>
            </div>
        </li>
    )
}