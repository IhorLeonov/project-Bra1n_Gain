import styled from 'styled-components';
import { ReactComponent as GooseLogo } from '../../shared/icons/goose.svg';
import { ReactComponent as IconClose } from '../../shared/icons/close.svg';

export const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  padding: 24px 20px;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  height: 100%;
  width: 225px;
  display: flex;
  z-index: 200;
  background: ${props => props.theme.colors.sideBarBgColor};

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;

    @media screen and (min-width: 1200px) {
      padding-top: 32px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
    }
  }
`;

export const CloseIcon = styled(IconClose)`
  stroke: #343434;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    transform: scale(1.375);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 32px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled(GooseLogo)`
  width: 36px;
  height: 35px;
  margin-right: 6px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1200px) {
    width: 71px;
    height: 68px;
  }
`;

export const Heading = styled.h1`
  color: ${props => props.theme.colors.primaryBlueColor};
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(22 / 16);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(22 / 18);
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const ItalicLetters = styled.span`
  font-style: italic;
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;

  width: 24px;
  height: 24px;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
