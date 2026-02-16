import { selector } from "recoil";
import { tasksState } from "../atoms/task";
import { filterTask } from "../atoms/filterTask";

export const filterTaskSelector = selector({
    key: 'filterTaskSelector',
    get: ({ get }) => {
        const tasks = get(tasksState);
        const filter = get(filterTask);

        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'uncompleted':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    },
});