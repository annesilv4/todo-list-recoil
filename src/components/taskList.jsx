import { useRecoilValue } from "recoil";
import { filterTaskSelector } from "../selectors/filterTaskSelector";
import { TaskItem } from "./taskItem";
import "./taskList.css";

export function TaskList() {
    const tasks = useRecoilValue(filterTaskSelector);

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}