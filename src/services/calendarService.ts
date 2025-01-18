import { useCurrentDate } from "../hooks/useCurrentDate";
import { useCalendarStore } from "../store/calendaStore";
import { formatDateToKey } from "../utils/dateUtils";

export type CalendarDay = {
    date: Date;
    number: number;
    holiday: string | null;
    currentMonth: boolean;
    selected: boolean;
}

export const calendarService = () => {
    const { holidays } = useCalendarStore();
    const { day: today } = useCurrentDate();

    const getStartOfCalendar = (date: Date): Date => {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const weekdayOfFirstDay = firstDayOfMonth.getDay();
        const startOfCalendar = new Date(firstDayOfMonth);
        startOfCalendar.setDate(firstDayOfMonth.getDate() - (weekdayOfFirstDay === 0 ? 7 : weekdayOfFirstDay));
        return startOfCalendar;
    }

    const yearHolidays: string[] = holidays[today.getFullYear()] || {};
    const startOfCalendar = getStartOfCalendar(today);
    const days: CalendarDay[] = [];

    for (let i = 0; i < 42; i++) {
        const currentDate = new Date(startOfCalendar);
        currentDate.setDate(startOfCalendar.getDate() + i);

        const dateKey: string = formatDateToKey(currentDate);
        const holiday = yearHolidays[dateKey as any] || null;

        days.push({
            date: currentDate,
            number: currentDate.getDate(),
            holiday,
            currentMonth: currentDate.getMonth() === today.getMonth(),
            selected: currentDate.toDateString() === today.toDateString(),
        })
    }


    return days;
}

