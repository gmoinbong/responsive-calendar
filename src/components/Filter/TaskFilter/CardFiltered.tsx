import React from 'react';
import { CalendarDay } from '../../../services/calendarService';
import { CalendarDayComponent, Holiday } from '../../Calendar/CalendarDays/CalendarDays.styles';
import { formatDateToKey } from '../../../utils/dateUtils';
import { TaskValue } from '../../../store/taskStore';
import Task from '../../Tasks/Task';


interface Props {
    day: CalendarDay;
    task: TaskValue;
    index: number;
}

const CardFiltered: React.FC<Props> = (props) => {
    const { day, task, index } = props;

    return (
        <CalendarDayComponent
            $isCurrentMonth={true}
        >
            {formatDateToKey(day.date)}
            {day.holiday && <Holiday>{day.holiday}</Holiday>}
            <Task draggable={false} key={task.id} task={task} day={day} index={index} />
        </CalendarDayComponent>
    )
};

export default CardFiltered;
