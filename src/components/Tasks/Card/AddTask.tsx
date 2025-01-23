import { useState } from "react";
import { TaskType, useTaskStore } from "../../../store/taskStore";
import { TaskTextArea } from "../../Calendar/CalendarDays/CalendarDays.styles";
import { CalendarDay } from "../../../services/calendarService";

interface Card2Props {
    day: CalendarDay;
}

const AddTask: React.FC<Card2Props> = (props) => {
    const { day } = props;

    const taskStore = useTaskStore()

    const [description, setDescription] = useState<string>()

    const [taskType, setTaskType] = useState<TaskType>("in_progress");

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskType(event.target.value as TaskType);
    };

    return (
        <>
            <TaskTextArea
                onChange={(event) => {
                    setDescription(event.target.value)
                }}
                value={description}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && description) {
                        taskStore.addTask(day.date, description, taskType)
                        setDescription('')
                    }
                }}
            />
            <div style={{ display: "flex", gap: "16px" }}>
                <label>
                    <input
                        type="radio"
                        name="taskType"
                        value="in_progress"
                        checked={taskType === "in_progress"}
                        onChange={handleTypeChange}
                    />
                    In Progress
                </label>
                <label>
                    <input
                        type="radio"
                        name="taskType"
                        value="done"
                        checked={taskType === "done"}
                        onChange={handleTypeChange}
                    />
                    Done
                </label>
                <label>
                    <input
                        type="radio"
                        name="taskType"
                        value="pending"
                        checked={taskType === "pending"}
                        onChange={handleTypeChange}
                    />
                    Pending
                </label>
            </div>
        </>

    )
}
export default AddTask;