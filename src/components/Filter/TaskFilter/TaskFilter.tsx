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

    console.log('tasksForDay:', tasksForDay);
    console.log('taskType:', taskType);

    const taskByType = tasksForDay.reduce<TasksByType>((map, task) => {
        const key = task.type;
        const tasks = map[key] ?? [];
        tasks.push(task);

        return {
            ...map,
            [key]: tasks,
        };
    }, {} as TasksByType);

    console.log('taskByType:', taskByType);

    const filteredTasks = taskType.flatMap((type) => taskByType[type] || []);
    console.log('filteredTasks:', filteredTasks);

    return (
        <>
            {filteredTasks.map((task) => (
                <div>
                    {task.type}
                    <CardFiltered key={task.id} day={day} task={task} />
                </div>
            ))}
        </>
    );
};

export default TaskFilter;
