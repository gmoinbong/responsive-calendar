import React from 'react';
import { formatDateToKey } from '../../../utils/dateUtils';
import { useDayTasks } from '../../../hooks/useDayTasks';
import { CalendarDay } from '../../../services/calendarService';

type DayTaskProps = {
  day: CalendarDay
}

const TaskDays: React.FC<DayTaskProps> = ({ day }) => {
  const dateKey = formatDateToKey(day.date);
  const dayTasks = useDayTasks(dateKey)

  return (
    <ul>
      {dayTasks.map((task) => (
        <li key={task.id}>{task.description}</li>
      ))}
    </ul>

  );
};

export default TaskDays;
