import styled from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { BiErrorCircle, BiCheckCircle, BiChevronDown } from 'react-icons/bi';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
    min-height: 100vh;

  background: ${props => props.theme.colors.componentsBgColor};
  border-radius: 0 16px 16px 16px;
  padding: 40px 18px;

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
  }
`;

export const FormUserProfile = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
  }
  @media screen and (min-width: 1280px) {
    width: 758px;
  }
`;

export const BtnUploadAvatar = styled(Field)`
  opacity: 1;
  position: absolute;
  bottom: -6%;
  right: 20%;
  overflow: hidden;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 15px;



  ::before {
    content: ' +';
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    padding: 5px;
    background: ${props => props.theme.colors.buttonsColor};
    position: absolute;
    // transition: background анимация;
    top: -8px;
    left: -45%;
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 24px;
    height: 24px;
    bottom: -5%;
    right: 20%;

    ::before {
      top: -9px;
      left: -28%;
      width: 40px;
      height: 40px;
    }
  }
`;

export const Avatar = styled.img`
  border-radius: inherit;

  width: 68px;
  height: 68px;

  @media screen and (min-width: 768px) {
    top: 0;
    left: -60px;
    width: 120px;
    height: 120px;
  }
`;

export const LabelAvatar = styled.label`
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: -71px;
  right: -36px;
  width: 72px;
  height: 72px;
  border: 2px solid ${props => props.theme.colors.buttonsColor};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    top: 0;
    left: -60px;
    width: 124px;
    height: 124px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const ErrorMassege = styled.div`
  position: absolute;
  bottom: 3px;
  left: 15px;
  font-size: 10px;
  line-height: 1.16;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: 0;
  }
`;

export const ErrorCircleIcon = styled(BiErrorCircle)`
  position: absolute;
  opacity: 0;
  top: 30px;
  right: 18px;
  &.error {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    top: 33px;
  }
`;

export const CheckCircleIcon = styled(BiCheckCircle)`
  position: absolute;
  opacity: 0;
  top: 30px;
  right: 18px;
  &.success {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    top: 33px;
  }
`;

export const BiChevronDownIcon = styled(BiChevronDown)`
  position: absolute;
  top: 30px;
  right: 18px;
  pointer-events: none;
    color: ${props => props.theme.colors.textColor};


  @media screen and (min-width: 768px) {
    top: 33px;
  }
`;

export const UserName = styled.p`
  margin: 0 auto;
  margin-top: 18px;
  color: ${props => props.theme.colors.textColor};

  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin-top: 144px;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const UserLabel = styled.span`
  margin-top: 4px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
    color: ${props => props.theme.colors.accountLabelColor};


  @media screen and (min-width: 768px) {
      margin-top: 8px;
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.inputNormal};
  outline: none;
  margin-top: 8px;
  margin-bottom: 18px;
  padding: 12px 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: ${props => props.theme.colors.componentsBgColor};
  color: ${props => props.theme.colors.textColor};



  :hover,
  :focus {
    border-color: ${props => props.theme.colors.inputHover};
  }

  &.error {
    border-color: ${props => props.theme.colors.inputError};
  }

  
  &.success {
    border-color: ${props => props.theme.colors.inputCorrect};
  }


  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }

  @media screen and (min-width: 1280px) {
    width: 354px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.accountLabelColor};
  

  &.error {
    color: ${props => props.theme.colors.inputError};
  }

  &.success {
    color: ${props => props.theme.colors.inputCorrect};

    
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const MainFieldWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 70px;
  }
`;
export const BlockFieldWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SubmitBtn = styled.button`
  margin: 0 auto;
  // margin-top: 22px;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: ${props => props.theme.colors.buttonsColor}
  color: ${props => props.theme.colors.Primary};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 262px;
  }

  //   transition: background-color анимация;

  :disabled {
    cursor: not-allowed;
  }

  :hover,
  :focus {
    background-color: rgba(43, 120, 239, 1);
  }

  :disabled {
    opacity: 0.4;
  }
`;

export const DatePickerStyles = styled(DatePicker)`
  width: 100%;
  height: 40px;
  background: ${props => props.theme.colors.componentsBgColor};
  color: ${props => props.theme.colors.textColor};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.inputNormal};
  outline: none;
  margin-top: 8px;
  margin-bottom: 18px;
  padding: 12px 14px;
  font-family: Inter-600, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  cursor: pointer;

  &.success {
    border-color: ${props => props.theme.colors.inputCorrect};
  }

  :hover,
  :focus {
    border-color:  ${props => props.theme.colors.inputHover};
  }


  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    width: 354px;
  }
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  .react-datepicker {
    background-color: ${props => props.theme.colors.primaryBlueColor};
    border-radius: 16px;
    overflow: hidden;
    border: none;
    color: ${props => props.theme.colors.currentdayBgColor};
    width: 327px;
    height: 354px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
  .react-datepicker__header {
    position: relative;
    background-color: ${props => props.theme.colors.primaryBlueColor};
    border-bottom: 1px solid ${props => props.theme.colors.primaryBlueColor};
  }

  .react-datepicker__navigation-icon {
    ::before {
      border-color: rgba(255, 255, 255, 1);
    }

    .react-datepicker__navigation--next {
      right: 9px;
      top: 35px;
    }
  }

  .react-datepicker__month-select,
  .react-datepicker__year-select {
    padding: 5px;
    width: 90px;
    color: rgba(255, 255, 255, 1);

    text-align: center;
    font-size: 10px;
    overflow-y: auto;
    cursor: pointer;

    @media screen and (min-width: 375px) {
      width: 110px;
    }

    @media screen and (min-width: 1280px) {
      width: 120px;
      font-size: 16px;
    }

    &:focus {
      outline: none;
    }

    ::-webkit-scrollbar {
      box-sizing: border-box;
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    }
  }

  .react-datepicker__current-month {
    margin-top: 15px;
    margin-bottom: 11px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;

    color: rgba(255, 255, 255, 1);
  }

  .react-datepicker__day-name {
    width: 46px;
    height: 42px;
    margin: 0;
    padding: 9px;
    color: rgba(255, 255, 255, 1);
  }

  .react-datepicker__day {
    width: 46px;
    height: 46px;
    margin: 0;
    padding: 9px;
    color: rgba(255, 255, 255, 1);
    :hover,
    :focus {
      background-color: ${props => props.theme.colors.accentColor};
      color: ${props => props.theme.colors.textColor};
      border-radius: 24px;
      opacity: 0.7;
    }
  }

  .react-datepicker__day--weekend {
    // color: rgba(255, 255, 255, 1);
    color: ${props => props.theme.colors.Primary};

    opacity: 40%;
  }

  .react-datepicker__day--today,
  .react-datepicker__day--selected {
    background-color: rgba(255, 255, 255, 1);
    color: ${props => props.theme.colors.Primary};
    border-radius: 50%;
    opacity: 1;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    top: 30px;
  }

  .react-datepicker__navigation--next {
    right: 7px;
    top: 30px;
  }

  .react-datepicker__day-names {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
