import React from 'react';
import { CalendarDay } from '../../../services/calendarService';
import { CalendarDayComponent, Holiday } from '../../Calendar/CalendarDays/CalendarDays.styles';
import { formatDateToKey } from '../../../utils/dateUtils';
import { TaskValue } from '../../../store/taskStore';
import TaskFiltered from '../../Tasks/Card/TaskFiltered';


interface Props {
    day: CalendarDay;
    task: TaskValue;
}

const CardFiltered: React.FC<Props> = (props) => {
    const { day, task } = props;


    return (
        <CalendarDayComponent
            $isCurrentMonth={true}
        >
            {day.holiday && <Holiday>{day.holiday}</Holiday>}
            {formatDateToKey(day.date)}
            {<TaskFiltered key={task.id} task={task} day={day} />}
        </CalendarDayComponent>
    )
};

export default CardFiltered;
