import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoImg = styled.img`
  width: 142px;
  height: 142px;

  @media (min-width: 765px) {
    width: 150px;
    height: 150px;
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
  height: 100vh;
  padding: 0px;

  background-color: ${props => props.theme.colors.Accent};
  padding: 88px 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainTitle = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 120px;
  font-family: var(--title-font);
  line-height: 150px;
`;
export const AcсentTitle = styled.span`
  font-style: italic;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SignUp = styled(NavLink)`
  width: 121px;
  height: 49px;
  margin: 0;
  border: 0;
  border-radius: 15px;
  display: block;
  padding: 14px 22px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    transform: scale(1.2);
    transition-duration: 500ms;
  }
  &:hover {
    transform: scale(1.2);
    transition-duration: 500ms;
  }
`;
export const Login = styled(NavLink)`
  width: 131px;
  height: 46px;
  padding: 0;
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
`;
