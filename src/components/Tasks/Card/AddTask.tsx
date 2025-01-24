import type React from "react"
import { useState } from "react"
import { type TaskType, useTaskStore } from "../../../store/taskStore"
import type { CalendarDay } from "../../../services/calendarService"
import {
  AddTaskButton,
  AddTaskContainer,
  Modal,
  Overlay,
  SimpleButton,
  TaskInput,
  TaskTypeContainer,
  TaskTypeLabel,
} from "../Task.styles"

interface AddTaskProps {
  day: CalendarDay
}

const AddTask: React.FC<AddTaskProps> = ({ day }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [description, setDescription] = useState<string>("")
  const [taskType, setTaskType] = useState<TaskType>("in_progress")

  const taskStore = useTaskStore()

  const handleAddTask = () => {
    if (description) {
      taskStore.addTask(day.date, description, taskType)
      setDescription("")
      setModalOpen(false)
    }
  }

  return (
    <AddTaskContainer>
      <AddTaskButton className="add-task-button" onClick={() => setModalOpen(true)}>
        +
      </AddTaskButton>
      {isModalOpen && (
        <>
          <Overlay onClick={() => setModalOpen(false)} />
          <Modal>
            <h4>Add New Task</h4>
            <TaskInput
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TaskTypeContainer>
              <TaskTypeLabel>
                <input
                  type="radio"
                  name="taskType"
                  value="in_progress"
                  checked={taskType === "in_progress"}
                  onChange={() => setTaskType("in_progress")}
                />
                In Progress
              </TaskTypeLabel>
              <TaskTypeLabel>
                <input
                  type="radio"
                  name="taskType"
                  value="done"
                  checked={taskType === "done"}
                  onChange={() => setTaskType("done")}
                />
                Done
              </TaskTypeLabel>
              <TaskTypeLabel>
                <input
                  type="radio"
                  name="taskType"
                  value="pending"
                  checked={taskType === "pending"}
                  onChange={() => setTaskType("pending")}
                />
                Pending
              </TaskTypeLabel>
            </TaskTypeContainer>
            <SimpleButton onClick={handleAddTask}>Add Task</SimpleButton>
          </Modal>
        </>
      )}
    </AddTaskContainer>
  )
}

export default AddTask

