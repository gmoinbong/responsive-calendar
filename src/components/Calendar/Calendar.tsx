import React, { useEffect } from 'react';
import { useCurrentDate } from '../../hooks/useCurrentDate'
import CalendarDays from './CalendarDays';
import { useCalendarStore } from '../../store/store';
import { CurrentDate, Wrapper } from './Calendar.styles';



const Calendar: React.FC = () => {
  const { fetchHolidays } = useCalendarStore()
  const currentDate = useCurrentDate();
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    fetchHolidays(currentYear, "UA")
  }, [fetchHolidays, currentYear])

  return (
    <Wrapper>
      <CurrentDate>
        {currentDate.formattedDate}
      </CurrentDate>
      <CalendarDays />
    </Wrapper>
  );
};

export default Calendar;
