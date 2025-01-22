import React from "react";
import { useCalendayDays } from "../../services/calendarService";

import { Card2 } from "./Card2";

const BoardApp: React.FC = () => {
    const days = useCalendayDays()

    return (
        <React.Fragment>
            {days.map((day) => {
                return <Card2 key={day.date.getTime()} day={day} />
            })}
        </React.Fragment>
    );
};

export default BoardApp;
