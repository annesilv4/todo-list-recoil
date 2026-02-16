import { atom } from "recoil";

const savedTask = localStorage.getItem("tasks");

export const tasksState = atom({
    key: "taskState",
    default: savedTask ? JSON.parse(savedTask) : [],
});