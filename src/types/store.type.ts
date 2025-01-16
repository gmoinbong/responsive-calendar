export interface Holidays {
    [year: number]: Array<string>;
}
export interface CalendarStore {
    currentDay: Date;
    setCurrentDay: (date: Date) => void;
    resetToStartOfDay: () => void;
    holidays: Holidays;
    fetchHolidays: (year: any, country: any) => Promise<void>;
}
