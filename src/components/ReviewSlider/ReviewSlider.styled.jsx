import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ReviewTitle = styled.h2`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  font-family: 'Inter', sans-serif;
  font-weight: 700;

  font-size: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  line-height: 32px;

  @media (min-width: 768px) {
    line-height: 44px;
  }
  color: #3e85f3;
  text-transform: uppercase;
`;

export const ReviewInfo = styled(Slider)`
  margin: 0 24px;
  @media (min-width: 768px) {
    padding: 32px;
  }

  width: 335px;
  height: 100%;

  @media (min-width: 768px) {
    width: 580px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
    // padding-bottom: 188px;
  }
`;

export const WrapperReview = styled.div`
  // @media screen and (min-width: 1440px) {
  //   display: flex;
  //   gap: 24px;
  // }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
`;

export const UserInfo = styled.div`
  padding: 24px 20px 24px 24px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  display: flex;
  gap: 18px;
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
`;
export const ButtonPreview = styled.button`
  margin: 0;
  width: auto;
  height: auto;
  // стили для кнопки - предыдущий комент
`;
export const ButtonNext = styled.button`
  transform: rotate(180deg);
  // стили для кнопки - следующий комент
  width: auto;
  height: auto;
`;
