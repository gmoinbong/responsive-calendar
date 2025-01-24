import styled from "styled-components"

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 8px;
    color: #172b4d;
    cursor: grab;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: scale(0.98);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
`

export const StatusColor = styled.div<{ $statusColor: string }>`
    min-width: 35px;
    height: 10px;
    background-color: ${({ $statusColor }) => $statusColor};
    border-radius: 10px;
    margin-right: 10px;
`

export const TaskContent = styled.div`
    flex-grow: 1;
`

export const AddTaskContainer = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const AddTaskButton = styled.button`
    padding: 4px 8px;
    background-color: rgb(124, 122, 122);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.3s;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    font-size: 20px;
    line-height: 1;

    ${AddTaskContainer}:hover & {
        opacity: 1;
    }

    &:hover {
        background-color: rgb(177, 182, 189);
    }
`
export const SimpleButton = styled.button`
  padding: 4px 8px;
  background-color: rgb(124, 122, 122);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 1;
  
&:hover {
    background-color: rgb(177, 182, 189);
  }
`;
export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
display: flex;
    justify-content: center;
    align-items: center;
flex-direction: column;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

export const TaskInput = styled.textarea`
    width: 100%;
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    scrollbar-width: thin;
    scrollbar-color: #ccc;
`

export const TaskTypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`

export const TaskTypeLabel = styled.label`
    font-size: 1.2rem;
`

export const EditInput = styled.input`
    flex: 1;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 30px;
`

export const DeleteButton = styled.img`
    margin-left: 8px;
    padding: 4px 8px;
    font-size: 12px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: #d9363e;
    }
`

