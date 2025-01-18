import React, { useCallback, useState } from 'react';
import { TaskTextArea } from '../../Calendar/CalendarDays/CalendarDays.styles';
import { formatDateToKey } from '../../../utils/dateUtils';
import { useTaskStore } from '../../../store/taskStore';
import { CalendarDay } from '../../../services/calendarService';

type Props = {
    day: CalendarDay;
};

const TaskManager: React.FC<Props> = ({ day }) => {
    const [task, setTask] = useState<{ [key: string]: string }>({});
    const { addTask, tasks } = useTaskStore();

    const handleTaskChange = useCallback((dayDate: Date, value: string) => {
        const dateKey = formatDateToKey(dayDate);
        setTask((prevTasks) => ({
            ...prevTasks,
            [dateKey]: value,
        }));
    }, []);

    const handleTaskSubmit = useCallback((dayDate: Date) => {
        const dateKey = formatDateToKey(dayDate);
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

    const getTasksForDay = useCallback((dayDate: string) => tasks[dayDate] || [], [tasks]);
    const dateKey = formatDateToKey(day.date);
    const dayTasks = getTasksForDay(dateKey);


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
            <ul>
                {dayTasks.map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
        </ >
    );
};

export default TaskManager;