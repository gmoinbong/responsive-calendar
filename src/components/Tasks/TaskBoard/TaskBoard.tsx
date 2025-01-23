import React from "react";
import { useCalendayDays } from "../../../services/calendarService";

import { useFilterStore } from "../../../store/filterStore";
import TaskFilter from "../../Filter/TaskFilter";
import Card from "../Card";

const TaskBoard: React.FC = () => {
    const days = useCalendayDays()
    const { filterName } = useFilterStore()

    return (
        <React.Fragment>
            {days.map((day) => {
                {
                    return filterName.length === 0 ? <Card key={day.date.getTime()} day={day} /> :
                        <TaskFilter key={day.date.getTime()} day={day} taskType={filterName} />
                }

            })}
        </React.Fragment>
    );
};

export default TaskBoard;


