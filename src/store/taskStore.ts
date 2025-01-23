import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type TaskKey = number; // year-month-day

export type TaskType = 'in_progress' | 'done' | 'pending' | ''

export interface TaskValue {
    id: number;
    description: string;
    type: TaskType
    createdAt: Date;
}

export interface TaskStore {
    tasks: Record<TaskKey, TaskValue[]>
    addTask: (date: Date, description: string, type: TaskType) => void;
    removeTask: (date: Date, taskId: number) => void;
    updateTask: (date: Date, taskId: number, description: string) => void;
    moveTask: (fromDate: Date, toDate: Date, targetTaskId: number) => void;
}

export const createKey = (date: Date): TaskKey => {
    return date.getTime()
}

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: {},
            addTask: (date: Date, description: string, type: TaskType) => {
                const key = createKey(date);

                const now = new Date()

                const taskValue: TaskValue = {
                    id: now.getTime(),
                    description,
                    type,
                    createdAt: now
                }

                set((state) => {
                    const tasks = state.tasks[key] ?? []

                    const nextTasks = [...tasks, taskValue]

                    return {
                        tasks: { ...state.tasks, [key]: nextTasks }
                    }
                })
            },
            removeTask(date: Date, taskId: number) {
                const key = createKey(date);

                set((state) => {
                    const tasks = state.tasks[key] ?? []

                    const filteredTasks = tasks.filter((task) => task.id !== taskId);

                    return {
                        tasks: { ...state.tasks, [key]: filteredTasks }
                    }
                })
            },
            updateTask(date: Date, taskId: number, description: string) {
                const key = createKey(date);

                set((state) => {
                    const tasks = state.tasks[key] ?? []

                    const nextTasks = tasks.map((task) => {
                        if (task.id === taskId) {
                            return {
                                ...task,
                                description,
                            }
                        }

                        return task
                    })

                    return {
                        tasks: { ...state.tasks, [key]: nextTasks }
                    }
                })
            },
            moveTask(fromDate: Date, toDate: Date, targetTaskId: number) {
                const fromKey = createKey(fromDate);

                const toKey = createKey(toDate);

                if (fromKey === toKey) return;

                set((state) => {
                    const fromTasks = state.tasks[fromKey] ?? []

                    const task = fromTasks.find((task) => task.id === targetTaskId)

                    if (!task) return state;

                    const toTasks = state.tasks[toKey] ?? []

                    const nextToTasks = [...toTasks, task]

                    const filteredFromTasks = fromTasks.filter((task) => task.id !== targetTaskId)

                    return {
                        tasks: { ...state.tasks, [toKey]: nextToTasks, [fromKey]: filteredFromTasks }
                    }
                })
            }
        }),
        {
            name: 'task-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);