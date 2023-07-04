import styled from 'styled-components';
import { ReactComponent as IconLogout } from 'shared/icons/icon-logout.svg';

export const LogoutButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 131px;
  height: 46px;
  padding: 14px;

  border: none;
  background: ${props => props.theme.colors.buttonsColor};
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.028px;
  color: ${props => props.theme.colors.Primary};
  transition-duration: 500ms;

  &:hover,
  &:focus {
    transform: scale(1.2);
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    padding: 16px;

    font-size: 18px;
    line-height: calc (24 / 18);
    letter-spacing: -0.028px;
  }
`;

export const LogoutButtonIcon = styled(IconLogout)`
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 11px;
  }
`;
