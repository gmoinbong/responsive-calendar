import { useCallback } from "react";
import { useTaskStore } from "../store/taskStore"


export const useDayTasks = (dateKey: string) => {
    const { tasks } = useTaskStore()

    const getTasksForDay = useCallback((dayDate: string) => tasks[dayDate] || [], [tasks]);
    const dayTasks = getTasksForDay(dateKey);

    return dayTasks;
}
