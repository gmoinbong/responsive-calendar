import React from "react";
import { TaskValue } from "../../../store/taskStore";
import { CalendarDay } from "../../../services/calendarService";
import CardFiltered from "../../Filter/TaskFilter/CardFiltered";

type Props = {
    day: CalendarDay;
    tasks: TaskValue[];
    searchTerm: string;
};

const SearchCard: React.FC<Props> = ({ day, tasks, searchTerm }) => {
    const filteredTasks = tasks.filter((task) =>
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredTasks.map((task) => (
                <CardFiltered  task={task} key={task.id} day={day} />
            ))}
        </div>
    ); 
};

export default SearchCard;
