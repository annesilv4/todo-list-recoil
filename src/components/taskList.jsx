import { useRecoilValue } from "recoil";
import { filterTaskSelector } from "../selectors/filterTaskSelector";
import { TaskItem } from "./taskItem";

export function TaskList() {
    const tasks = useRecoilValue(filterTaskSelector);

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}