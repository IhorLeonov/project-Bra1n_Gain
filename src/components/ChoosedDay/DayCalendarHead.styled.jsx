import styled from 'styled-components';

export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  margin-bottom: 14px;
`;

export const CellWrapper = styled.li`
  height: 34px;
  background: ${props => props.theme.mainBackgroundColor};
  font-family: 'InterSemiBolt';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.CalendarHead};
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:nth-child(7) {
    border-top-right-radius: 8px;
  }

  @media (min-width: 376px) {
    min-width: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 14px;
  }
`;

export const CellWrapperWeekend = styled.li`
  color: #3e85f3;
`;

export const CellWrapperOfDate = styled.li`
  height: 34px;
  background: #ffffff;
  font-family: 'InterBolt';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.12;
  text-align: center;
  text-transform: uppercase;
  color: #343434;
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-top: 2px;

  &:nth-last-child(7) {
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }

  @media (min-width: 376px) {
    min-width: 40px;
  }
`;
export const TodayDay = styled.p`
  color: #ffffff;
  background-color: #3e85f3;
  border-radius: 6px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 4px 8px;
    margin: -4px -8px;
    border-radius: 8px;
  }
`;
