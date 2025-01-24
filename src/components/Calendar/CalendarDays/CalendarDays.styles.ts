import styled from "styled-components"

export const CalendarWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0 auto;
  width: 100%;
  background: #f9f9f9;
padding: 20px;
`

export const CurrentDateStyled = styled.h1`
  font-size: 1.5rem;
  color: #172b4d;
  padding: 1rem;
  margin: 0;
  font-weight: 600;
`

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #dfe1e6;
  padding: 1px;
`

export const CalendarDayComponent = styled.div<{ $isCurrentMonth: boolean }>`
  min-height: 250px;
  background-color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "rgb(230, 230, 230)" : "rgb(248, 248, 248)")};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid rgb(190, 188, 188);
`

export const DayHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
  gap: 10px;
`

export const DayNumber = styled.span<{ $isCurrentMonth: boolean }>`
  font-size: 1.5rem;
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#172b4d" : "#7a869a")};
  font-weight: 500;
`

export const CardCount = styled.span`
  font-size: 1.25rem;
  color:#7a869a;
`

export const Holiday = styled.div`
  font-size: 1.25rem;
  color: #172b4d;;
  font-weight: 500;
`

export const TaskCard = styled.div`
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  padding: 6px 8px;
  margin-bottom: 4px;
  font-size: 1rem;
  color: #172b4d;
  cursor: pointer;
  
  &:hover {
    background: #f4f5f7;
  }
`

export const CardLabel = styled.div<{ $color: string }>`
  height: 3px;
  border-radius: 1.5px;
  background: ${({ $color }) => $color};
  margin-bottom: 4px;
`

export const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #ffffff;
  border-bottom: 1px solid #dfe1e6;
  
  > div {
    padding: 8px;
    text-align: center;
    color: #5e6c84;
    font-size: 1.3rem;
    font-weight: 500;
  }
`


export const TaskTextArea = styled.textarea`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #00000;
  width: 90%;
  height: 40px;
  border: 2px solid black;
  border-radius: 4px;
`;

export const LogicWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start



`
