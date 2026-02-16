import { useRecoilState } from "recoil";
import { filterTask } from "../atoms/filterTask";
import "./filter.css";

export function FilterTasks() {
    const [filter, setFilter] = useRecoilState(filterTask);

    return (
        <div className="filter-container">
            <button 
                className={`filter-button ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
            >
                Todas
            </button>
            <button 
                className={`filter-button ${filter === "completed" ? "active" : ""}`}
                onClick={() => setFilter("completed")}
            >
                Concluída
            </button>
            <button 
                className={`filter-button ${filter === "uncompleted" ? "active" : ""}`}
                onClick={() => setFilter("uncompleted")}
            >
                Pendentes
            </button>
        </div>
    );
}