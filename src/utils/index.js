import { format } from "date-fns";
import localforage from 'localforage'

export function formatDate(date) {
  return format(date, "yyyy-MM-dd HH:mm:ss");
}


export const setData = async (key, value) => {
    try {
        await localforage.setItem(key, value)
    } catch (err) {
        console.log(err);
    }
}

export const getData = async key => {
    try {
        const value = await localforage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (err) {
        console.log(err);
    }
}