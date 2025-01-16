import { useCalendarStore } from '../store/store';

export const useCurrentDate = () => {
    const { currentDay } = useCalendarStore();
    const date = {
        formattedDate: currentDay.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        }),
        day: currentDay,

    }
    return date;
}
