import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoImg = styled.img`
  width: 142px;
  height: 142px;
  margin-top: 0;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 0;
  }

  &:focus {
    transform: scale(1.3);
    transition-duration: 500ms;
  }
  &:hover {
    transform: scale(1.3);
    transition-duration: 500ms;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 812px;
  padding-top: 232px;
  background-color: ${props => props.theme.colors.primaryBlueColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;

  @media (min-width: 768px) {
    max-height: 1024px;
    padding-top: 320px;
  }

  @media (min-width: 1280px) {
    min-height: 770px;
    padding-top: 187px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 32px;
  padding: 0;
  color: #ffffff;
  font-size: 44px;
  font-family: var(--title-font);
  font-weight: 600;

  
  @media (min-width: 768px) {
    font-size: 120px;
    margin-bottom: 40px;
  }
`;
export const AcсentTitle = styled.span`
  font-style: italic;
`;
export const BtnContainer = styled.div`
display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;


export const SignUp = styled(NavLink)`
  margin: 0;
  border: 0;
  border-radius: 15px;

  padding: 14px 22px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 44;
  font-size: 12px;
  line-height: 18px;
  display: flex;

  justify-content: center;
  &:focus {
    transform: scale(1.2);
    transition-duration: 500ms;
  }
  &:hover {
    transform: scale(1.2);
    transition-duration: 500ms;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    width: 121px;
    height: 49px;
  }
`;

export const Login = styled(NavLink)`
  width: 131px;
  height: 46px;
  gap: 6px;
  padding: 0;
  margin-bottom: 200px;
  border: 0;
  border-radius: 15px;
  color: #3e85f3;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  &:focus {
    transform: scale(1.2);
    transition-duration: 500ms;
  }
  &:hover {
    transform: scale(1.2);
    transition-duration: 500ms;
  }

  @media (min-width: 768px) {
    width: 121px;
    height: 49px;
    margin-bottom: 0;
  }
`;

