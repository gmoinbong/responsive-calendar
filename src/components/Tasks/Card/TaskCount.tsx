import { TaskValue } from "../../../store/taskStore";

interface TaskCountProps {
    tasks: TaskValue[] | undefined;
}

const TaskCount: React.FC<TaskCountProps> = ({ tasks }) => {
    if (!tasks || tasks.length === 0) {
        return
    }
    return <div>{`${tasks && tasks?.length > 1 ? `${tasks?.length} Cards` : `${tasks?.length} Card`}`}</div>;
};

export default TaskCount;