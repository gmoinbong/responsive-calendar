export const DAYS_IN_CALENDAR = 42;

export const getStartOfCalendar = (date: Date): Date => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    const startOfCalendar = new Date(firstDayOfMonth);
    startOfCalendar.setDate(firstDayOfMonth.getDate() - (weekdayOfFirstDay === 0 ? 7 : weekdayOfFirstDay));
    return startOfCalendar;
}