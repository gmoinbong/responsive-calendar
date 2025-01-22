import React, { useMemo, useState } from 'react'
import { CalendarDayComponent, TaskTextArea } from '../Calendar/CalendarDays/CalendarDays.styles'
import { CalendarDay } from '../../services/calendarService'
import { createKey, TaskValue, useTaskStore } from '../../store/taskStore2'

export interface Card2Props {
    day: CalendarDay
}

export const Card2: React.FC<Card2Props> = (props) => {
    const { day } = props;

    const taskStore = useTaskStore()

    const dateKey = useMemo(() => createKey(day.date), [day.date])

    const tasks = taskStore.tasks[dateKey]

    return (
        <CalendarDayComponent $isCurrentMonth={day.currentMonth} >
            {day.date.toISOString()}
            <AddTask {...props} />
            {tasks?.map((task) => (
                <Task key={task.id} task={task} />
            ))}

        </CalendarDayComponent>
    )
}

export const AddTask: React.FC<Card2Props> = (props) => {
    const { day } = props;

    const taskStore = useTaskStore()

    const [description, setDescription] = useState<string>()

    return (
        <TaskTextArea
            onChange={(event) => {
                setDescription(event.target.value)
            }}
            value={description}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && description) {
                    taskStore.addTask(day.date, description)
                    setDescription('')
                }
            }}
        />
    )
}

export interface TaskProps {
    task: TaskValue
}

export const Task: React.FC<TaskProps> = (props) => {
    const { task } = props;

    return (
        <div key={task.id}>{task.description}</div>
    )
}