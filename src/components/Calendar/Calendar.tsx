import React, { useEffect } from 'react';
import { useCurrentDate } from '../../hooks/useCurrentDate'
import CalendarDays from './CalendarDays';
import { CurrentDate, Wrapper } from './Calendar.styles';
import { useHolidaysStore } from '../../store/holidayStore';

const Calendar: React.FC = () => {
  const { fetchHolidays } = useHolidaysStore()
  const currentDate = useCurrentDate();

  const currentYear = new Date().getFullYear()
  const currentFormattedDate = currentDate.formattedDate

  useEffect(() => {
    fetchHolidays(currentYear, "UA")
  }, [fetchHolidays, currentYear])

  return (
    <Wrapper>
      <CurrentDate>
        {currentFormattedDate}
      </CurrentDate>
      <CalendarDays />
    </Wrapper>
  );
};

export default Calendar;
