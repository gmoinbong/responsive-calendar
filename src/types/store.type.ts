
export interface CalendarStore {
    currentDay: Date;
    setCurrentDay: (date: Date) => void;
    resetToStartOfDay: () => void;
    goToNextMonth: () => void;
    goToPreviousMonth: () => void;
}


export type HolidaysStore = {
    holidays: Record<number, Record<string, string>>;
    isHolidaysLoaded: (year: number) => boolean;
    fetchHolidays: (year: number, country: string) => Promise<void>;
};
