import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 252px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    width: 503px;
    height: 250px;
    margin-bottom: 50px;
  }

  @media (min-width: 1280px) {
    margin-top: 100px;
  }
`;

export const Four = styled.p`
  color: ${props => props.theme.colors.primaryBlueColor};
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  font-size: 100px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 200px;
  }
`;

export const Picture = styled.picture`
  object-fit: contain;
`;

export const TextWrapper = styled.p`
  display: flex;
  margin-right: 47px;
  margin-left: 47px;
  flex-direction: column;
  color: ${props => props.theme.colors.notFoundTextColor};
  text-align: center;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;

export const GoHome = styled(NavLink)`
  border: none;
  cursor: pointer;
  position: relative;
`;

export const GoHomeText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #3e85f3;

  &:after {
    content: ' ';
    background: #3e85f3;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 21px;
    left: 0px;
  }
`;
