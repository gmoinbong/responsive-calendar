
export interface Task {
    [key: string]: string;
}

export interface CalendarStore {
    currentDay: Date;
    setCurrentDay: (date: Date) => void;
    resetToStartOfDay: () => void;
}

export interface TaskStore {
    tasks: { [key: string]: { id: string; description: string; }[] };
    addTask: (dateKey: string, taskDescription: string) => void;
    setTasks: (newTasks: { [key: string]: { id: string; description: string }[] }) => void;
    moveTask: (sourceDayKey: string, targetDayKey: string, taskId: string) => void
}

export type HolidaysStore = {
    holidays: Record<number, Record<string, string>>;
    isHolidaysLoaded: (year: number) => boolean;
    fetchHolidays: (year: number, country: string) => Promise<void>;
};
