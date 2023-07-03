import styled from 'styled-components';

export const GridWrapper = styled.ul`
  height: ${props => (props.page ? '50px' : '74px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.calendarMonthBorder};
  margin-top: 24px;
  margin-bottom: 14px;
  background-color: ${props => props.theme.colors.componentsBgColor};
  padding: ${props => (props.page ? '16px' : '14px 18px')};

  @media (min-width: 768px) {
    padding: ${props => (props.page ? '14px 40px' : '10px 32px')};
    height: ${props => (props.page ? '46px' : '68px')};
    margin-bottom: ${props => (props.page ? '18px' : '16px')};
    margin-top: ${props => (props.page ? '32px' : '24px')};
  }

  @media (min-width: 1280px) {
    margin-bottom: ${props => (props.page ? '15px' : '16px')};
    padding: ${props => (props.page ? '14px 60px' : '10px 46px')};
    margin-top: 32px;
  }
`;

export const CellWrapperOfDate = styled.li`
  background: ${props => props.theme.colors.componentsBgColor};
  font-family: 'Inter';

  text-align: center;
  color: ${props => props.theme.colors.headerFontcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;

  cursor: ${props => (props.page ? 'default' : 'pointer')};

  @media (min-width: 376px) {
    min-width: 40px;
    gap: 6px;
  }

  :hover {
    color: ${props => !props.page && '#fff'};
    background-color: ${props => !props.page && '#3e85f3'};
    transform: ${props => !props.page && 'scale(1.12)'};
    font-size: ${props => !props.page && '12px'};
    transition-duration: ${props => !props.page && '500ms'};
  }
`;

export const Day = styled.p`
  font-weight: 600;
  color: ${props =>
    props.weekend ? '#3e85f3' : `${props.theme.colors.dayCalendarHeadBgColor}`};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.12;
  @media (min-width: 768px) {
    font-size: ${props => (props.page ? '16px' : '14px')};
    line-height: ${props => (props.page ? '1.12' : '1.3')};
  }
`;

export const Date = styled.p`
  color: ${props => props.isCurrentDay && '#fff'};
  background-color: ${props =>
    props.isCurrentDay
      ? '#3e85f3'
      : `${props => props.theme.mainBackgroundColor}`};
  border-radius: 6px;
  padding: 4px 6px;
  font-weight: 700;

  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
