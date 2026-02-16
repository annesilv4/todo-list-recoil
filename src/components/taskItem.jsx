import { useRecoilState } from "recoil";
import { tasksState } from "../atoms/task";

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
        <li>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.description}
            </span>
            <button onClick={toggleTask}>Concluir</button>
            <button onClick={removeTask}>Remover</button>
        </li>
    )
}