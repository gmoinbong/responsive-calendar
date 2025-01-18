import { useMemo } from "react";
import { useCurrentDate } from "../hooks/useCurrentDate";
import { useCalendarStore } from "../store/calendaStore";
import { formatDateToKey } from "../utils/dateUtils";
import { DAYS_IN_CALENDAR, getStartOfCalendar } from "./constant";

export type CalendarDay = {
    date: Date;
    number: number;
    holiday: string | null;
    currentMonth: boolean;
    selected: boolean;
}

export const calendarService = (): CalendarDay[] => {
    const { holidays } = useCalendarStore();
    const { day: today } = useCurrentDate();

    const days = useMemo(() => {
        const yearHolidays: string[] = holidays[today.getFullYear()] || {};
        const startOfCalendar = getStartOfCalendar(today);
        const calendarDays: CalendarDay[] = [];

        for (let i = 0; i < DAYS_IN_CALENDAR; i++) {
            const currentDate = new Date(startOfCalendar);
            currentDate.setDate(startOfCalendar.getDate() + i);

            const dateKey: string = formatDateToKey(currentDate);
            const holiday = yearHolidays[dateKey as any] || null;

            calendarDays.push({
                date: currentDate,
                number: currentDate.getDate(),
                holiday,
                currentMonth: currentDate.getMonth() === today.getMonth(),
                selected: currentDate.toDateString() === today.toDateString(),
            })
        }
        return calendarDays;
    }, [holidays, today]);


    return days;
}

