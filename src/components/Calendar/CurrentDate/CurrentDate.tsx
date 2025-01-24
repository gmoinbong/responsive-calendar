import React from 'react';
import { useCurrentDate } from '../../../hooks/useCurrentDate';
import { CurrentDateStyled } from '../CalendarDays/CalendarDays.styles';


const CurrentDate: React.FC = () => {
  const currentDate = useCurrentDate()
  const currentFormattedDate = currentDate.formattedDate

  return (
    <CurrentDateStyled>{currentFormattedDate}</CurrentDateStyled>

  );
};

export default CurrentDate;
