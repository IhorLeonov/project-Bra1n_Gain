import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoImg = styled.img` 
padding: 0;
border: 0;
border-radius: 15px;
color: ${props => props.theme.colors.Accent};
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 18px;
background-color: ${props => props.theme.colors.Accent};
align-items: center;
display: flex;
justify-content: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 770px;
  background-color: ${props => props.theme.colors.Accent};
  max-width: 100%;
  border: 1px solid rgb(251 251 251 / 0%);
`;
export const MainTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  color: #fff;
  font-size: 44px;
  font-family: 'Coolvetica';
  font-weight: 400;
  line-height: 48px;
`;
export const OoTxt = styled.span`
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