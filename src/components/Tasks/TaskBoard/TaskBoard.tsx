import type React from "react"
import { useFilterStore } from "../../../store/filterStore"
import { useTaskStore } from "../../../store/taskStore"
import TaskFilter from "../../Filter/TaskFilter"
import Card from "../Card"
import SearchCard from "../../Search/SearchCard"
import { TableContent } from "../../Calendar/CalendarDays/CalendarDays.styles"
import CardFiltered from "../../Filter/TaskFilter/CardFiltered"
import { CalendarDay, useCalendarDays } from "../../../services/calendarService"

interface TaskBoardProps {
    searchTerm: string
}

const TaskBoard: React.FC<TaskBoardProps> = ({ searchTerm }) => {
    const days = useCalendarDays()
    const { filterName } = useFilterStore()
    const taskStore = useTaskStore()

    const renderDayContent = (day: CalendarDay ) => {
        const tasksForDay = taskStore.tasks[day.date.getTime()] || []

        if (searchTerm.length === 0 && filterName.length === 0) {
            return <Card key={day.date.getTime()} day={day} />
        }

        if (filterName.length > 0 && searchTerm.length === 0) {
            return <TaskFilter key={day.date.getTime()} day={day} taskType={filterName} />
        }

        if (searchTerm.length > 0 && filterName.length === 0) {
            return <SearchCard key={day.date.getTime()} day={day} searchTerm={searchTerm} tasks={tasksForDay} />
        }

        if (filterName.length > 0 && searchTerm.length > 0) {
            const filteredTasks = tasksForDay
                .filter((task) => filterName.includes(task.type))
                .filter((task) => task.description.toLowerCase().includes(searchTerm.toLowerCase()))

            return (
                <div key={day.date.getTime()}>
                    {filteredTasks.map((task) => (
                        <CardFiltered  task={task} key={task.id} day={day} />
                    ))}
                </div>
            )
        }

        return null
    }

    return <TableContent>{days.map(renderDayContent)}</TableContent>
}

export default TaskBoard

