import { useRecoilState } from "recoil";
import { filterTask } from "../atoms/filterTask";

export function FilterTasks() {
    const [filter, setFilter] = useRecoilState(filterTask);

    return (
        <div>
            <button onClick={() => setFilter("all")}>Todas</button>
            <button onClick={() => setFilter("completed")}>Concluída</button>
            <button onClick={() => setFilter("uncompleted")}>Pendentes</button>
        </div>
    );
}