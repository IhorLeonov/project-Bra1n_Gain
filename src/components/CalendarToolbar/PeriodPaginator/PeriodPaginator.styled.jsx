import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export const Wrapper = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    justify-content: none;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 30px;
  font-size: 14px;
  color: #343434;
  border: 1px solid #edf1f2;
  background-color: #fff;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;

export const Period = styled.span`
  padding: 6px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e85f3;
  border-radius: 8px;
cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const ButtonLeft = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  background-color: ${props => props.typeDate === 'month' && '#CAE8FF'};
`;

export const ButtonRight = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${props => props.typeDate === 'day' && '#CAE8FF'};
`;

export const ArrowLeft = styled(MdOutlineKeyboardArrowLeft)`
  width: 16px;
  height: 16px;
  fill: ${props => props.disabled ? "#DCE3E5" : "#343434"};

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  width: 16px;
  height: 16px;
  fill: #343434;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
