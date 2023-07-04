import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  text-align: center;
  background-color: #FFFFFF;
`;

export const ReviewTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: 1.15;
  color: ${props => props.theme.colors.primaryBlueColor};
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 44px;
  }
`;

export const ReviewInfo = styled(Slider)`
  margin-left: auto;
  margin-right: auto;

  width: 335px;
  height: 100%;

  @media (min-width: 768px) {
    width: 580px;
  }

  @media screen and (min-width: 1280px) {
    width: 1184px;
  }
`;

export const WrapperReview = styled.div`
  padding: 0 12px;
  
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  max-width: none;
`;

export const UserInfo = styled.div`
  padding: 24px 20px 24px 24px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  display: flex;
  gap: 18px;
  height: 194px;

  @media (min-width: 768px) {
    height: 187px;
    padding: 32px;
  }
`;

export const UserName = styled.p`
  margin-bottom: 13px;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #343434;
`;

export const FirstLetter = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e85f3;
  font-size: 44px;
  color: var(--main-font-white-color);
  font-weight: 700;
`;

export const StarRating = styled.div`
  display: flex;
  color: #ffac33;
  gap: 10px;
`;
export const GrayStar = styled(FaStar)`
  color: #cec9c1;
  width: 14px;
  height: 14px;
`;

export const ReviewText = styled.p`
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);
  text-align: left;
`;

export const ButtonBox = styled.div`
  // стили для бокса с кнопками
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-top: 8px;
  padding-bottom: 64px;

  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 32px;
    padding-bottom: 118px;
  }
`;
export const ButtonPreview = styled.button`
  margin: 0;
  width: auto;
  height: auto;
  background-color: transparent;
  // стили для кнопки - предыдущий комент
  transition: transform 0.2s ease-in-out;
  :hover,
  :focus{
    transform: scale(1.2);
  }
`;
export const ButtonNext = styled.button`
  transform: rotate(180deg);
  // стили для кнопки - следующий комент
  transition: transform 0.2s ease-in-out;
  width: auto;
  height: auto;
  background-color: transparent;

  :hover,
  :focus{
    transform: scale(1.2) rotate(180deg);
  }
`;
