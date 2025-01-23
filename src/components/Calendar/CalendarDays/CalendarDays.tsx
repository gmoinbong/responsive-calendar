import React, { useEffect } from 'react';
import { TableContent } from './CalendarDays.styles';

import TaskBoard from '../../Tasks/TaskBoard';
import Filter from '../../Filter';
import { CurrentDate } from '../Calendar.styles';
import { useCurrentDate } from '../../../hooks/useCurrentDate';
import { useHolidaysStore } from '../../../store/holidayStore';

const CalendarDays: React.FC = () => {
  const { fetchHolidays } = useHolidaysStore()

  const currentDate = useCurrentDate();
  const currentFormattedDate = currentDate.formattedDate
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    fetchHolidays(currentYear, "UA")
  }, [fetchHolidays, currentYear])


  return (
    <>
      <CurrentDate>
        {currentFormattedDate}
      </CurrentDate>
      <Filter />
      <TableContent>
        <TaskBoard />
      </TableContent>
    </>
  );
};

export default CalendarDays;
