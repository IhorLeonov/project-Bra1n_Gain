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
  &:hover, &:focus {
    transform: scale(1.3);
    transition-duration: 500ms;
  }
`;

export const Wrapper = styled.div`
  padding-top: 232px;
  background-color: ${props => props.theme.colors.primaryBlueColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 88px;

  @media (min-width: 768px) {
    padding-top: 321px;
  }

  @media (min-width: 1280px) {
    padding-top: 187px;
    padding-bottom: 200px;
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

  color: #fff;
  font-family: var(--main-font);
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;

  &:hover, &:focus {
    transform: scale(1.2);
    transition-duration: 500ms;
  }

  @media (min-width: 768px) {
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
  margin-bottom: 221px;
  
  width: 131px;
  height: 46px;
  border-radius: 15px;
  color: #3e85f3;
  
  font-family: var(--main-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;

  &:focus,
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

