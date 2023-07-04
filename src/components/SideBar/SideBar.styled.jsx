import styled from 'styled-components';
import { ReactComponent as GooseLogo } from '../../shared/icons/goose.svg';
import { CgClose } from 'react-icons/cg';

export const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 225px;
  z-index: 200;
  background: ${props => props.theme.colors.sideBarBgColor};

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;

    @media screen and (min-width: 1280px) {
      padding-top: 32px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
    }
  }
`;

export const Container1 = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  padding: 24px 20px;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  position: fixed;
  width: 225px;
  height: 100%;
  display: flex;
  z-index: 200;
  background: ${props => props.theme.colors.sideBarBgColor};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
`;


export const CloseIcon = styled(CgClose)`
  font-size: 24px;
  color: black;

  @media screen and (min-width: 768px) {
    transform: scale(1.375);
    font-size: 34px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
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

  @media screen and (min-width: 1280px) {
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

  @media screen and (min-width: 1280px) {
    width: 71px;
    height: 68px;
  }
`;

export const Heading = styled.h1`
  color: ${props => props.theme.colors.sideBarTextActiveColor};
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(22 / 16);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  margin-right: 26px;  

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    margin-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: calc(24 / 24);
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

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;