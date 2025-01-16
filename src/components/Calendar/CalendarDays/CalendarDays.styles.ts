import styled from "styled-components";

export const TableContent = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
`;

export const CalendarDay = styled.div<{ $isCurrentMonth: boolean }>`
    width: 200px;
    height: 120px;
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
    right: 10px;
    color: ${({ $isSelected }) => ($isSelected ? '#c00' : '#000')};
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? '#000' : '#a6a6a6')};
`;
