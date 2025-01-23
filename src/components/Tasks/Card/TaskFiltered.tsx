import { CalendarDay } from "../../../services/calendarService";
import { TaskValue } from "../../../store/taskStore";

interface Props {
    task: TaskValue
    day: CalendarDay
}
const TaskFiltered: React.FC<Props> = (props) => {
    const { task } = props;


    return (
        <div key={task.id}>
            {task.description}
        </div>
    );
};

export default TaskFiltered;

