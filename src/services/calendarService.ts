import { useMemo } from "react";
import { useCurrentDate } from "../hooks/useCurrentDate";
import { formatDateToKey } from "../utils/dateUtils";
import { DAYS_IN_CALENDAR, getStartOfCalendar } from "./constant";
import { useHolidaysStore } from "../store/holidayStore";

export type CalendarDay = {
    date: Date;
    number: number;
    holiday: string | null;
    currentMonth: boolean;
    selected: boolean;
}

export const calendarService = (): CalendarDay[] => {
    const { holidays } = useHolidaysStore();
    const { day: today } = useCurrentDate();

    const days = useMemo(() => {
        const yearHolidays: Record<string, string> = holidays[today.getFullYear()] || {};
        const startOfCalendar = getStartOfCalendar(today);
        const calendarDays: CalendarDay[] = [];

        for (let i = 0; i < DAYS_IN_CALENDAR; i++) {
            const currentDate = new Date(startOfCalendar);
            currentDate.setDate(startOfCalendar.getDate() + i);

            const dateKey: string = formatDateToKey(currentDate);
            const holiday = yearHolidays[dateKey] || null;

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

