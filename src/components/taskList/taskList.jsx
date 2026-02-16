import { useRecoilValue } from "recoil";
import { filterTaskSelector } from "../../selectors/filterTaskSelector";
import { TaskItem } from "../taskItem/taskItem";
import "./taskList.css"
import { useEffect } from "react";

export function TaskList() {
    const tasks = useRecoilValue(filterTaskSelector);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}