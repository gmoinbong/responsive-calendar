import { create } from 'zustand';
import { HolidaysStore } from '../types/store.type';
import { createJSONStorage, persist } from 'zustand/middleware';
import { fetchHolidays } from '../api/fetchHolidays';


export const useHolidaysStore = create<HolidaysStore>()(
    persist(
        (set, get) => ({
            holidays: {},
            isHolidaysLoaded: (year: number) => Boolean(get().holidays[year]),
            fetchHolidays: async (year: number, country: string) => {
                const { isHolidaysLoaded } = get()
                if (isHolidaysLoaded(year)) return;

                const parsedHolidays = await fetchHolidays(year, country)
                set((state) => ({
                    holidays: { ...state.holidays, [year]: parsedHolidays },
                }));
            },
        }),
        {
            name: "holiday-store",
            storage: createJSONStorage(() => localStorage)
        }
    )
);
