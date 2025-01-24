import type React from "react"
import { useState } from "react"
import TaskBoard from "../../Tasks/TaskBoard"
import Filter from "../../Filter"
import Search from "../../Search"
import MonthNavigation from "../../MonthNavigation"
import { CalendarWrapper, LogicWrapper } from "./CalendarDays.styles"
import Weekdays from "../Weekdays"
import CurrentDate from "../CurrentDate"


const CalendarDays: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <CalendarWrapper>
      <LogicWrapper>
        <Filter />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </LogicWrapper>
      <CurrentDate />
      <MonthNavigation />
      <Weekdays />
      <TaskBoard searchTerm={searchTerm} />
    </CalendarWrapper>
  )
}

export default CalendarDays

