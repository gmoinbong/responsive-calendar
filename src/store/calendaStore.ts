import { create } from 'zustand';
import { CalendarStore } from '../types/store.type';

export const useCalendarStore = create<CalendarStore>((set) => ({
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

    goToNextMonth: () =>
        set((state) => {
            const { currentDay } = state;
            const nextMonth = new Date(currentDay);
            nextMonth.setMonth(currentDay.getMonth() + 1);
            return { currentDay: nextMonth };
        }),

    goToPreviousMonth: () =>
        set((state) => {
            const { currentDay } = state;
            const prevMonth = new Date(currentDay);
            prevMonth.setMonth(currentDay.getMonth() - 1);
            return { currentDay: prevMonth };
        }),
}));
