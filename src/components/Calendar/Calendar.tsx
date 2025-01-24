import React from 'react';
import CalendarDays from './CalendarDays';
import { Wrapper } from './Calendar.styles';
import useFetchHolidays from '../../hooks/useFetchHolidays';

const Calendar: React.FC = () => {
  useFetchHolidays("UA");


  return (
    <Wrapper>
      <CalendarDays />
    </Wrapper>
  );
};

export default Calendar;
