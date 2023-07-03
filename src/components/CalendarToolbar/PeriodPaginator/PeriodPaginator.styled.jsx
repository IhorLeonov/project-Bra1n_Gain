import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import {
  DatePickerStyles,
  DatePickerWrapper,
} from 'components/UserForm/UserForm.styled';

export const Period = styled.span`
  padding: 6px 12px;
  width: ${props => props.typePeriod === "day" ? "116px" : "150px"} ;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  background-color: #3e85f3;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 8px 12px;
  width: ${props => props.typePeriod === "day" ? "136px" : "170px"} ;
  line-height: 1.2;

    font-size: 16px;
  }
`;

export const PickerWrapper = styled(DatePickerWrapper)`
  position: absolute;
  left: 0;
  top: 8px;

  @media screen and (min-width: 768px) {
    top: 13px;
  }

  .react-datepicker {
    width: 235px;
    height: 100%;
    padding: 18px;
  }

  .react-datepicker__month-container {
    width: 235px;
  }

  .react-datepicker__header {
    padding: 0;
  }
  .react-datepicker__current-month {
    margin: 0;
    margin-bottom: 18px;
  }
  .react-datepicker__navigation {
    top: 16px;
    width: 20px;
    height: 20px;
    text-align: center;

    :focus-visible {
      outline: 2px solid #fff;
    }
  }

  .react-datepicker__navigation--previous {
    left: 20px;
  }
  .react-datepicker__navigation-icon--previous {
    top: 1px;
    right: 0;
  }

  .react-datepicker__navigation--next {
    right: 20px;
  }

  .react-datepicker__navigation-icon--next {
    top: 1px;
    left: 0;
  }
  .react-datepicker__navigation-icon--next::before {
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-family: Inter;
    font-weight: 600;
    letter-spacing: -0.32px;
  }
  .react-datepicker__day-names {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 199px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;

    border: none;
  }

  .react-datepicker__day-name {
    width: 24px;
    height: 17px;
    padding: 0;

    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
    letter-spacing: -0.28px;
    line-height: 1.3;
    color: #ffffff80;
    cursor: default;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    width: 235px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 10px;
    border-top: 1px solid #ffffff33;
  }

  .react-datepicker__day--outside-month,
  .react-datepicker__day--disabled {
    color: #ffffff33;
  }

  .react-datepicker__day--disabled.react-datepicker__day {
    cursor: default;
  }

  .react-datepicker__day--weekend {
    opacity: 1;
  }

  .react-datepicker__week {
    width: 199px;
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    font-size: 14px;
    font-family: Inter;
    line-height: 1.3;
    letter-spacing: -0.28px;
    cursor: pointer;

    :hover {
      background-color: #fff;
      color: #3e85f3;
      border-radius: 24px;
      opacity: 0.8;
    }

    :focus,
    :focus-visible {
      background-color: #fff;
      color: #3e85f3;
      border-radius: 24px;
      opacity: 1;
    }

    :focus-visible {
      outline: none;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #fff;
    color: #3e85f3;
    opacity: 0.7;
  }

  .react-datepicker__day--today {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  .react-datepicker__day--selected.react-datepicker__day--today,
  .react-datepicker__day--outside-month.react-datepicker__day--selected {
    background-color: #fff;
    color: #3e85f3;
  }
`;

export const DatePickerCastom = styled(DatePickerStyles)`
  display: none;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: none;
    gap: 8px;
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
  fill: ${props => (props.disabled ? '#DCE3E5' : '#343434')};

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
