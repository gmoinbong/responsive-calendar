import React, { useEffect } from 'react';
import { useCurrentDate } from '../../hooks/useCurrentDate'
import CalendarDays from './CalendarDays';
import { useCalendarStore } from '../../store/calendaStore';
import { CurrentDate, Wrapper } from './Calendar.styles';

const Calendar: React.FC = () => {
  const { fetchHolidays } = useCalendarStore()
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
