import styled from 'styled-components';

export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  padding-left: 0;
  margin-bottom: 14px;
`;

export const CellWrapper = styled.div`
  height: 50px;
  background: #ffffff;
  font-family: 'InterSemiBolt';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  text-align: center;
  text-transform: uppercase;
  color: #343434;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (min-width: 376px) {
    min-width: 40px;
  }

  @media (min-width: 768px) {
    height: 46px;
  }
`;

export const CellWrapperWeekend = styled.li`
  color: #3e85f3;
`;
