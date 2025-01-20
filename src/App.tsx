import React from 'react';
import Calendar from './components/Calendar';
import BoardApp from './components/BoardApp';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <>
      <Calendar />
      {/* <BoardApp /> */}
    </>
  );
};

export default App;