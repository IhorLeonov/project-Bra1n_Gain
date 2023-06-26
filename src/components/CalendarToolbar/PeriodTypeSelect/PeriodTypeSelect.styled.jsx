import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrraper = styled.div`
  display: flex;
`

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 34px;
  font-size: 14px;
  color: #3e85f3;
  background-color: #e3f3ff;

  @media screen and (min-width: 768px) {
    width: 82px;
    height: 34px;
    font-size: 16px;
  }
  :hover,
  :focus{
background-color: #CAE8FF;
transition-duration: 500ms;
  }

  &.active{
background-color: #CAE8FF;
  }
`;

export const ButtonMonth = styled(Button)`
  border-radius: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 1px solid #aed4fd;
`;

export const ButtonDay = styled(Button)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
