export const formatDateToKey = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const formatDateToDay = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');

    if (day.startsWith('0')) return day.slice(1);
    return day;
}