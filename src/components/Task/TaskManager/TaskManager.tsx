import React, { useCallback, useState } from 'react';
import { TaskTextArea } from '../../Calendar/CalendarDays/CalendarDays.styles';
import { formatDateToKey } from '../../../utils/dateUtils';
import { useTaskStore } from '../../../store/taskStore';
import { CalendarDay } from '../../../services/calendarService';
import DayTask from '../TaskDays';

type Props = {
    day: CalendarDay;
};

const TaskManager: React.FC<Props> = ({ day }) => {
    const [task, setTask] = useState<{ [key: string]: string }>({});
    const { addTask } = useTaskStore();

    const dateKey = formatDateToKey(day.date);

    const handleTaskChange = useCallback((_dayDate: Date, value: string) => {
        setTask((prevTasks) => ({
            ...prevTasks,
            [dateKey]: value,
        }));
    }, []);

    const handleTaskSubmit = useCallback((_dayDate: Date) => {
        const taskDescription = task[dateKey];
        if (taskDescription?.trim()) {
            addTask(dateKey, taskDescription);
            setTask((prevTasks) => ({
                ...prevTasks,
                [dateKey]: '',
            }));
        }
    }, [addTask, task]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>, dayDate: Date) => {
        if (e.key === 'Enter') {
            handleTaskSubmit(dayDate);
        }
    }, [handleTaskSubmit]);


    return (
        <>
            <TaskTextArea
                onKeyDown={(e) => handleKeyDown(e, day.date)}
                onChange={(e) => handleTaskChange(day.date, e.target.value)}
                value={task[dateKey] || ''}
            />
            <button onClick={() => handleTaskSubmit(day.date)} type="submit">
                Submit
            </button>
            <DayTask day={day} />
        </ >
    );
};

export default TaskManager;