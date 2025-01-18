import React from 'react';
import { calendarService } from '../../../services/calendarService';
import { useCalendarStore } from '../../../store/calendaStore';
import { CalendarDay, DayNumber, Holiday, TableContent } from './CalendarDays.styles';
import TaskManager from '../../Task/TaskManager';

const CalendarDays: React.FC = () => {
  const currentDays = calendarService();
  const { setCurrentDay } = useCalendarStore();

  return (
    <TableContent>
      {currentDays.map((day, index) => {
        return (
          <CalendarDay
            onClick={() => setCurrentDay(day.date)}
            key={index}
            $isCurrentMonth={day.currentMonth}
          >
            {day.holiday && <Holiday>{day.holiday}</Holiday>}
            <DayNumber $isSelected={day.selected} $isCurrentMonth={day.currentMonth}>
              {day.number}
            </DayNumber>
            <TaskManager day={day} />
          </CalendarDay>
        );
      })}
    </TableContent>
  );
};

export default CalendarDays;
