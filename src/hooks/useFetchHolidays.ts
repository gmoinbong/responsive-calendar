import { useEffect } from 'react';
import { useHolidaysStore } from '../store/holidayStore';

const useFetchHolidays = (countryCode: string) => {
    const { fetchHolidays } = useHolidaysStore();
    const currentYear = new Date().getFullYear()

    useEffect(() => {
        fetchHolidays(currentYear, countryCode);
    }, [fetchHolidays, currentYear, countryCode]);
};

export default useFetchHolidays;
