import React from 'react';
import CalendarDays from './CalendarDays';
import { Wrapper } from './Calendar.styles';

const Calendar: React.FC = () => {
  return (
    <Wrapper>
      <CalendarDays />
    </Wrapper>
  );
};

export default Calendar;
