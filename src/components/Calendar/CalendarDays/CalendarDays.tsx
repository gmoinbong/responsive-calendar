import React from 'react';
import { TableContent } from './CalendarDays.styles';

import BoardApp from '../../BoardApp';

const CalendarDays: React.FC = () => {
  return (
    <TableContent>
      <BoardApp />
    </TableContent>
  );
};

export default CalendarDays;
