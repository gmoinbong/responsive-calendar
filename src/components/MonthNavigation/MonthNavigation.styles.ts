import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    gap:10px;
`;

export const StyledButton = styled.button`
    all: unset;
    display: inline-block;
    background-color: #6c757d;
    color: #fff;
    width:200px;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: #5c636a;
    }
    :active {
        box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
    }
    margin: 10px 15px; 
`;
