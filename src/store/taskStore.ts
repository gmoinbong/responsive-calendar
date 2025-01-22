import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Task, TaskStore } from '../types/store.type';

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: {},
            setTasks: (newTasks) => set({ tasks: newTasks }),
            addTask: (dateKey: string, taskDescription: string) => {
                const newTask = { id: `${dateKey}-${Date.now()}`, description: taskDescription };
                set((state) => ({
                    tasks: {
                        ...state.tasks,
                        [dateKey]: [...(state.tasks[dateKey] || []), newTask],
                    },
                }));
            },
            moveTask: (sourceDayKey: string, targetDayKey: string, taskId: string) => {
                set((state) => {
                    const taskToMove = state.tasks[sourceDayKey]?.find(task => task.id === taskId);
                    const updatedSourceDayTasks = state.tasks[sourceDayKey]?.filter(task => task.id !== taskId) || [];

                    if (taskToMove) {
                        return {
                            tasks: {
                                ...state.tasks,
                                [sourceDayKey]: updatedSourceDayTasks,
                                [targetDayKey]: [
                                    ...(state.tasks[targetDayKey] || []),
                                    taskToMove,
                                ],
                            },
                        };
                    }
                    return state;
                });
            },
        }),
        {
            name: 'task-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
