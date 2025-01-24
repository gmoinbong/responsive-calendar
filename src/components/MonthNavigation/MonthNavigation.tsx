import React from 'react';
import { useCalendarStore } from '../../store/calendaStore';
import { CalendarWrapper } from '../Calendar/CalendarDays/CalendarDays.styles';
import { StyledButton, StyledDiv } from './MonthNavigation.styles';

const MonthNavigation: React.FC = () => {
    const { goToNextMonth, goToPreviousMonth } = useCalendarStore();

    return (
        <CalendarWrapper>
            <StyledDiv>
                <StyledButton onClick={goToPreviousMonth}>Previous Month</StyledButton>
                <StyledButton onClick={goToNextMonth}>Next Month</StyledButton>
            </StyledDiv>
        </CalendarWrapper>
    );
};

export default MonthNavigation;
