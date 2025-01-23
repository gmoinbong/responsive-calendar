import { CalendarDay } from "../../services/calendarService";
import { useDragAndDropStore } from "../../store/dragAndDropStore";
import { TaskValue } from "../../store/taskStore";

interface TaskProps {
    task: TaskValue
    day: CalendarDay
}

export const Task: React.FC<TaskProps> = (props) => {
    const { task, day } = props;

    const setDraggedTask = useDragAndDropStore((state) => state.setDraggedTask);

    const handleDragStart = () => {
        setDraggedTask(task.id, day.date);
    };


    return (
        <div
            draggable
            onDragStart={handleDragStart}
            key={task.id}
        >
            {task.description}
        </div>
    )
}

export default Task;