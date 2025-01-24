import React from 'react';
import { WeekdayHeader } from '../CalendarDays/CalendarDays.styles';
import { WEEKDAYS } from '../../../services/constant';

const Weekdays: React.FC = () => {
  return (
    <WeekdayHeader>
      {WEEKDAYS.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </WeekdayHeader>
  );
};

export default Weekdays;
