import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  backgroundcolor: #f7f6f9;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  //   border: 1px solid red;
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

  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const Four = styled.p`
  color: #3e85f3;
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
  //   width: 281px;
  //   height: 54px;
  margin-right: 47px;
  margin-left: 47px;
  flex-direction: column;
  color: rgba(17, 17, 17, 0.7);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;

export const GoHome = styled(NavLink)`
  background-color: var(--main-accent-blue);
  width: 100px;
  border-radius: 15px;
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
