import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primaryBlueColor};
  height: 812px;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const LogoImg = styled.img`
  width: 142px;
  height: 142px;
  margin-top: 0;
  margin-bottom: 2px;
  transition: transform 0.5s ease;
  
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 0;
  }
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 32px;
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
  display: flex;
  justify-content: center;
  padding: 15.5px 24px;
  margin-top: 208px;

  color: #fff;
  font-family: var(--main-font);
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
  transition: transform 0.5s ease;
  
  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    margin-top: 0; /////
    line-height: 18px;
    font-size: 14px;
    width: 121px;
    height: 49px;
  }
`;

export const Login = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 131px;
  height: 46px;
  border-radius: 15px;
  color: #3e85f3;

  font-family: var(--main-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;
  transition: transform 0.5s ease;
  
  &:focus,
  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    width: 121px;
    height: 49px;
    margin-bottom: 0;
  }
`;
