import React, { useState, useCallback } from "react";
import { CalendarDay } from "../../services/calendarService";
import { useDragAndDropStore } from "../../store/dragAndDropStore";
import { TaskValue, useTaskStore } from "../../store/taskStore";
import { getStatusColor } from "../../utils/statusColor";
import { StatusColor, TaskContainer, TaskContent, EditInput, DeleteButton } from "./Task.styles";
import Logo from '../../assets/deleteIcon.svg';

interface TaskProps {
    task: TaskValue;
    day: CalendarDay;
    index: number;
    draggable: boolean;
}

const Task: React.FC<TaskProps> = ({ task, day, index, draggable }) => {
    const { updateTask, removeTask } = useTaskStore();
    const setDraggedTask = useDragAndDropStore((state) => state.setDraggedTask);
    const moveTaskWithinDay = useTaskStore((state) => state.moveTaskWithinDay);

    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleDragStart = useCallback((e: React.DragEvent) => {
        setDraggedTask(task.id, day.date);
        e.dataTransfer.setData("text/plain", index.toString());
    }, [task.id, day.date, index, setDraggedTask]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const toIndex = index;

        if (!isNaN(fromIndex) && fromIndex !== toIndex) {
            moveTaskWithinDay(day.date, fromIndex, toIndex);
        }
    }, [index, day.date, moveTaskWithinDay]);

    const handleSave = useCallback(() => {
        if (editedDescription.trim()) {
            updateTask(day.date, task.id, editedDescription);
        }
        setIsEditing(false);
    }, [editedDescription, day.date, task.id, updateTask]);

    const handleDelete = useCallback(() => {
        removeTask(day.date, task.id);
    }, [day.date, task.id, removeTask]);

    const statusColor = getStatusColor(task.type);

    return (
        <TaskContainer
            draggable={draggable}
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            key={task.id}>
            <StatusColor $statusColor={statusColor} />
            {isEditing ?
                (
                    <EditInput
                        autoFocus
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSave();
                        }} />)
                : (
                    <TaskContent onClick={() => setIsEditing(true)}>{task.description}</TaskContent>
                )}
            <DeleteButton src={Logo} alt="delete" onClick={handleDelete} />
        </TaskContainer>
    );
};

export default Task;
