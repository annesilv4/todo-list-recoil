import { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../atoms/task";

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

    return (
        <div>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite sua tarefa..."
            />
            <button onClick={addTask}>Adicionar</button>
        </div>
    );
}
