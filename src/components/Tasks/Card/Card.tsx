import React, { useMemo } from 'react'
import { CalendarDayComponent, Holiday, } from '../../Calendar/CalendarDays/CalendarDays.styles'
import { CalendarDay } from '../../../services/calendarService'
import { createKey, useTaskStore } from '../../../store/taskStore'
import { useDragAndDropStore } from '../../../store/dragAndDropStore'
import { formatDateToKey } from '../../../utils/dateUtils'
import AddTask from './AddTask'
import TaskCount from './TaskCount'
import Task from '../Task'

interface Card2Props {
    day: CalendarDay
}

const Card: React.FC<Card2Props> = (props) => {
    const { day } = props;

    const taskStore = useTaskStore()

    const dateKey = useMemo(() => createKey(day.date), [day.date])

    const tasks = taskStore.tasks[dateKey]

    const { draggedTaskId, draggedFromDate, clearDraggedTask } = useDragAndDropStore();

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();

        if (draggedTaskId && draggedFromDate) {
            const fromDate = new Date(draggedFromDate);
            taskStore.moveTask(fromDate, day.date, draggedTaskId);
            clearDraggedTask();
        }
    };
    return (
        <CalendarDayComponent $isCurrentMonth={day.currentMonth} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} >
            {formatDateToKey(day.date)}
            {day.holiday && <Holiday>{day.holiday}</Holiday>}
            <AddTask {...props} />
            <TaskCount tasks={tasks} />
            {tasks?.map((task) => (
                <Task key={task.id} task={task} day={day} />
            ))}

        </CalendarDayComponent>
    )
}


export default Card;