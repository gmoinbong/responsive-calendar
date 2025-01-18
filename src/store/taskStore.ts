import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TaskStore } from '../types/store.type';

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: {},
            addTask: (dateKey: string, taskDescription: string) => {
                const newTask = { id: `${dateKey}-${Date.now()}`, description: taskDescription };
                set((state) => ({
                    tasks: {
                        ...state.tasks,
                        [dateKey]: [...(state.tasks[dateKey] || []), newTask],
                    },
                }));
            }
        }),
        {
            name: 'task-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);