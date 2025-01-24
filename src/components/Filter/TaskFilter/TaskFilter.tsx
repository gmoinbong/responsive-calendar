import React from 'react';
import { TaskType, TaskValue, useTaskStore } from '../../../store/taskStore';
import CardFiltered from './CardFiltered';
import { CalendarDay } from '../../../services/calendarService';

export type TasksByType = Record<TaskType, TaskValue[]>;

type Props = {
    day: CalendarDay;
    taskType: TaskType[];
};

const TaskFilter: React.FC<Props> = (props) => {
    const { day, taskType } = props;

    const taskStore = useTaskStore();
    const dayTimestamp = day.date.getTime();
    const tasksForDay = taskStore.tasks[dayTimestamp] || [];

    const taskByType = tasksForDay.reduce<TasksByType>((map, task) => {
        const key = task.type;
        const tasks = map[key] ?? [];
        tasks.push(task);

        return {
            ...map,
            [key]: tasks,
        };
    }, {} as TasksByType);

    const filteredTasks = taskType.flatMap((type) => taskByType[type] || []);

    return (
        <>
            {filteredTasks.map((task) => (
                    <CardFiltered index={day.date.getTime()} key={task.id} day={day} task={task} />
            ))}
        </>
    );
};

export default TaskFilter;
