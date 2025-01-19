import { create } from 'zustand';
import { CalendarStore } from '../types/store.type';


export const useCalendarStore = create<CalendarStore>
    ((set) => ({
        currentDay: new Date(),

        setCurrentDay: (date: Date) => set({ currentDay: date }),

        resetToStartOfDay: () =>
            set((state) => {
                const { currentDay } = state;
                return {
                    currentDay: new Date(
                        currentDay.getFullYear(),
                        currentDay.getMonth(),
                        currentDay.getDate()
                    ),
                };
            }),
    }));
