import { CalendarDay } from "../../services/calendarService";
import { useDragAndDropStore } from "../../store/dragAndDropStore";
import { TaskValue, useTaskStore } from "../../store/taskStore";

interface TaskProps {
    task: TaskValue;
    day: CalendarDay;
    index: number;
}

const Task: React.FC<TaskProps> = (props) => {
    const { task, day, index } = props;

    const setDraggedTask = useDragAndDropStore((state) => state.setDraggedTask);
    const moveTaskWithinDay = useTaskStore((state) => state.moveTaskWithinDay);

    const handleDragStart = (e: React.DragEvent) => {
        setDraggedTask(task.id, day.date);
        e.dataTransfer.setData("text/plain", index.toString());
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const toIndex = index;

        if (!isNaN(fromIndex) && fromIndex !== toIndex) {
            moveTaskWithinDay(day.date, fromIndex, toIndex);
        }
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            key={task.id}
        >
            {task.description}
        </div>
    );
};

export default Task;
