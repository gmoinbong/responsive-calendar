interface Holidays {
    [year: number]: Array<string>;
}

export interface Task {
    [key: string]: string;
}

export interface CalendarStore {
    currentDay: Date;
    setCurrentDay: (date: Date) => void;
    resetToStartOfDay: () => void;
    holidays: Holidays;
    fetchHolidays: (year: any, country: any) => Promise<void>;
}

export interface TaskStore {
    tasks: { [key: string]: { id: string; description: string; }[] };
    addTask: (dateKey: string, taskDescription: string) => void;
}