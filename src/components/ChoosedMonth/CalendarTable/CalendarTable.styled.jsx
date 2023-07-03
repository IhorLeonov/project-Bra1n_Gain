import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const getTaskColor = props => {
  switch (props.priority) {
    case 'low':
      return 'color: #3E85F3; background-color: #CEEEFD;';
    case 'medium':
      return 'color: #F3B249; background-color: #FCF0D4;';
    case 'high':
      return 'color: #EA3D65; background-color: #FFD2DD;';
    default:
      return 'color: #3E85F3; background-color: #FFFFFF';
  }
};

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 8px;
`;

export const CurrentDay = styled.div`
  color: ${props =>
    props.isCurrentDate
      ? `${props.theme.colors.currentdayBgColor}`
      : 'inherit'};
  background-color: ${props => (props.isCurrentDate ? '#3e85f3' : 'inherit')};
  border-radius: 6px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  width: 22px;

  &:hover,
  &:focus {
    background: #3e85f3;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding: 4px 8px;
    margin: -4px -8px;
    border-radius: 8px;
  }
`;

export const CellWrapper = styled(NavLink)`
  min-width: 28px;
  min-height: 94px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background: ${props => props.theme.colors.currentdayBgColor};
  font-family: 'InterBolt';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.headerFontcolor};

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }

  &:nth-child(7) {
    border-top-right-radius: 8px;
  }

  &:nth-last-child(7) {
    border-bottom-left-radius: 8px;
  }

  @media (min-width: 376px) {
    min-width: 48px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    min-width: 100px;
    height: 144px;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    height: 135px;
  }
`;

export const DayWrapper = styled.div`
  padding: 10px 12px;
  font-weight: 700;
  font-family: 'InterBolt';

  @media (min-width: 768px) {
    padding: 18px 22px;
  }
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 40px;
`;

export const TaskItem = styled.li`
  height: 22px;
  padding: 4px 4px 4px 8px;
  font-family: 'InterBolt';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  ${props => getTaskColor(props)};

  @media (min-width: 768px) {
    min-width: 94px;
    height: 26px;
    padding: 4px 8px 4px 12px;
    font-size: 14px;
    line-height: 1.29;
  }

  @media (min-width: 1280px) {
    min-width: 114px;
  }
`;

export const TasksMoreLabel = styled.div`
  margin-top: auto;
  margin: auto;
  color: #3e85f3;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
`;
export const TaskWrapper = styled.ul`
  list-style-type: none;
  padding: 0 8px 0px 8px;
`;
