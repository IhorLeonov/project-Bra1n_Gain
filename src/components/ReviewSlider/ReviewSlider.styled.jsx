import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ReviewTitle = styled.h2`
  margin-bottom: 40px;

  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #3e85f3;
  text-transform: uppercase;
`;

export const ReviewInfo = styled(Slider)`
  padding: 24px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
`;

export const UserName = styled.h3`
  margin-bottom: 15px;

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
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);
  text-align: left;
`;

export const ButtonBox = styled.div`
  // стили для бокса с кнопками
`;
export const ButtonPreview = styled.button`
  // стили для кнопки - предыдущий комент
`;
export const ButtonNext = styled.button`
  // стили для кнопки - следующий комент
`;
