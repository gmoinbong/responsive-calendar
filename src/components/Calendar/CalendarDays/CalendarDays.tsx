import React from 'react';
import { calendarService } from '../../../services/calendarService';
import { CalendarDay, DayNumber, Holiday, TableContent } from './CalendarDays.styles';

const CalendarDays: React.FC = () => {
  const currentDays = calendarService()

  return (
    <TableContent>
      {currentDays.map((day, index) => (
        <CalendarDay key={index} $isCurrentMonth={day.currentMonth}>
          {day.holiday && <Holiday>{day.holiday}</Holiday>}
          <DayNumber $isSelected={day.selected} $isCurrentMonth={day.currentMonth}>
            {day.number}
          </DayNumber>
        </CalendarDay>
      ))}
    </TableContent >
  );
};

export default CalendarDays;
