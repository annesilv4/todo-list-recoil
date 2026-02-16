import { atom } from "recoil";

export const filterTask = atom({
    key: 'filterTask',
    default: 'all',
})