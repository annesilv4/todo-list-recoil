import { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../../atoms/task";
import "./taskForm.css";

export function TaskForm() {
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useRecoilState(tasksState);

    const addTask = () => {
        if (description.trim() === "") return;

        const newTask = {
            id: Date.now(),
            description,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setDescription("");
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

    return (
        <div className="task-form">
            <input
                type="text"
                className="task-form-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua tarefa..."
            />
            <button className="task-form-button" onClick={addTask}>Adicionar</button>
        </div>
    );
}
