import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Heading = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 14);
  color: ${props => props.theme.colors.sideBarUserPanelColor};
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const UserNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  padding: 16px 20px;
  gap: 2px;
  color: ${props => props.theme.colors.sideBarTextColor} !important;

  &.active {
    color: ${props => props.theme.colors.sideBarTextActiveColor} !important;
    background: ${props => props.theme.colors.accentColor};
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  transform: scale(0.85);
  margin-right: 10px;
  stroke: ${props => props.theme.colors.sideBarTextColor};

  &.active {
    stroke: ${props => props.theme.colors.sideBarTextActiveColor};
  }

  @media screen and (min-width: 768px) {
    transform: scale(1);
    width: 24px;
    height: 24px;
  }
`;

export const IconStatistic = styled.svg`
  width: 20px;
  height: 20px;
  transform: scale(0.85);
  margin-right: 10px;
  fill: ${props => props.theme.colors.sideBarTextColor};

  &.active {
    fill: ${props => props.theme.colors.sideBarTextActiveColor};
  }

  @media screen and (min-width: 768px) {
    transform: scale(1);
    width: 24px;
    height: 24px;
  }
`;
