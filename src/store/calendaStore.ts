import { create } from 'zustand';
import { CalendarStore } from '../types/store.type';
import { HOLIDAYS_API_BASE_URL } from './constant';


export const useCalendarStore = create<CalendarStore>((set, get) => ({
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

    holidays: {},

    fetchHolidays: async (year: number, country: string) => {
        const { holidays } = get();
        console.log('store', holidays);

        if (holidays[year]) {
            console.info(`Holidays for year ${year} are already loaded.`);
            return;
        }

        try {
            const response = await fetch(`${HOLIDAYS_API_BASE_URL}/${year}/${country}`);

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch holidays for year ${year} and country ${country}. Status: ${response.status}`
                );
            }

            const data = await response.json();
            const parsedHolidays = data.reduce((acc: Record<string, string>, holiday: any) => {
                acc[holiday.date] = holiday.name;
                return acc;
            }, {});

            set((state) => ({
                holidays: { ...state.holidays, [year]: parsedHolidays },
            }));
        } catch (error) {
            console.error("Error fetching holidays:", error);
        }
    },

}));
