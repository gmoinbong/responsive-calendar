    import React, { useMemo } from 'react'
    import { CalendarDayComponent, DayHeader, DayNumber, Holiday, } from '../../Calendar/CalendarDays/CalendarDays.styles'
    import { CalendarDay } from '../../../services/calendarService'
    import { createKey, useTaskStore } from '../../../store/taskStore'
    import { useDragAndDropStore } from '../../../store/dragAndDropStore'
    import { formatDateToDay } from '../../../utils/dateUtils'
    import TaskCount from './TaskCount'
    import Task from '../Task'
    import AddTask from './AddTask'

    interface Card2Props {
        day: CalendarDay;

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
                <DayHeader>
                    <DayNumber $isCurrentMonth={day.currentMonth}>
                        {formatDateToDay(day.date)}
                    </DayNumber>
                    <TaskCount tasks={tasks} />
                    {day.holiday && <Holiday>{day.holiday}</Holiday>}
                </DayHeader>
                <AddTask {...props} />
                {tasks?.map((task, index) => (
                    <Task draggable key={task.id} task={task} day={day} index={index} />
                ))}
            </CalendarDayComponent>
        )
    }


    export default Card;