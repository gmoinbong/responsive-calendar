import styled from "styled-components";

export const TableContent = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
`;

export const CalendarDayComponent = styled.div<{ $isCurrentMonth: boolean }>`
    width: 400px;
    height: 250px;
    position: relative;
    border: 1px solid #a6a6a6;
    background-color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#fff' : '#e7e7e7'
    )};

    &:hover {
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#000' : '#a6a6a6')};
    background - color: rgba(0, 0, 0, 0.1);
}
`;

export const Holiday = styled.div`
    font - size: 0.8rem;
    font - weight: bold;
    color: #ff0000;
    position: absolute;
    top: 5px;
    left: 5px;
`;

export const DayNumber = styled.p<{ $isSelected: boolean, $isCurrentMonth: boolean }>`
    position: absolute;
    left: 10px;
    color: ${({ $isCurrentMonth: isCurrentMonth }) => (isCurrentMonth ? '#000' : '#a6a6a6')};
    color: ${({ $isSelected: isSelected }) => (isSelected ? '#ff0000' : '#000')};
`;

export const TaskTextArea = styled.textarea`
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #00000;
    width: 90%;
    height: 40px;
   border: 2px solid black;
  border-radius: 4px;

`
