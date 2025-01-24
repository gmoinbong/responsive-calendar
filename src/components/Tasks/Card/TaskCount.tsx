import { TaskValue } from "../../../store/taskStore";
import { CardCount } from "../../Calendar/CalendarDays/CalendarDays.styles";

interface TaskCountProps {
    tasks: TaskValue[] | undefined;
}

const TaskCount: React.FC<TaskCountProps> = ({ tasks }) => {
    if (!tasks || tasks.length === 0) {
        return
    }
    return <CardCount>{`${tasks && tasks?.length > 1 ? `${tasks?.length} Cards` : `${tasks?.length} Card`}`}</CardCount>;
};

export default TaskCount;