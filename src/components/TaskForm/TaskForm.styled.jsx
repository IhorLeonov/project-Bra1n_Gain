import styled from 'styled-components';
import { Field } from 'formik';
import { FiPlus } from 'react-icons/fi';
import DatePicker from 'react-datepicker';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;

  color: ${props => props.theme.colors.modalTasksColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    line-height: 1.3;
    margin-bottom: 18px;
  }
`;
export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  position: relative;

  color: ${props => props.theme.colors.dateNumberColor};
  font-size: 12px;
  font-family: var(--title-font);
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const Input = styled(Field)`
  padding: 12px 14px;
  width: 100%;

  color: ${props => props.theme.colors.dateNumberColor};
  font-size: 14px;
  font-family: var(--title-font);
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  border: none;
  background-color: ${props => props.theme.colors.taskModalInputColor};
  border-radius: 8px;
  outline: none;

  :focus {
    box-shadow: 0px 2px 4px 0px #1111111a;
  }

  &::placeholder {
    color: ${props => props.theme.colors.modalInputTextColor};
  }

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
  }
`;

export const Radio = styled(Field)`
  position: absolute;
  opacity: 0;
`;

export const RadioCustom = styled.span`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.value === 'low'
      ? '#72C2F8'
      : props.value === 'medium'
      ? '#F3B249'
      : '#EA3D65'};
  transition: all 0.3s ease;
  text-align: center;

  ${Radio}:checked ~ & {
    width: 8px;
    height: 8px;

  }

  ${Radio}:checked, ${Radio}:checked ~ &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;

    border-radius: 14px;
    border: 1.3px solid
      ${props =>
        props.value === 'low'
          ? '#72C2F880'
          : props.value === 'medium'
          ? '#F3B24980'
          : '#EA3D6580'};
    @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
    }
  }
`;

export const WrapperRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const WrapperTime = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 18px;
  }
`;

export const ContainerForm = styled.div`
  width: 303px;
  padding: 48px 18px 40px;

  @media screen and (min-width: 768px) {
    padding: 40px 28px;
    width: 396px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 135px;
  height: 42px;

  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: #3e85f3;

  border: none;
  outline: none;
  padding: 0;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  transition: transform 0.2s ease-in-out;

  :focus,
  :hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    width: 182px;
    height: 48px;
  }
`;

export const CancelButton = styled(StyledButton)`
  background: #e5edfa;
  width: 118px;
  padding: 0;
  color: black;
  @media screen and (min-width: 768px) {
    width: 144px;
  }
`;

export const EditButton = styled(StyledButton)`
  width: 100%;
`;

export const Icon = styled.img`
  color: #fff;
`;

export const IconFiPlus = styled(FiPlus)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  color: ${props => props.theme.colors.notFoundTextColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LabelTime = styled(Label)`
margin: 0 0 8px 0;
`

export const TimePickerWrapper = styled.div`
display: flex;
flex-direction: column;

  .react-datepicker {
    width: 126px;
    height: 100%;
    padding: 18px;

    border: none;
    background-color: ${props => props.theme.colors.primaryBlueColor};
    border-radius: 8px;
    @media screen and (min-width: 768px) {
      width: 162px;
}
  }

  .react-datepicker-popper[data-placement^=bottom]{
    padding-top: 6px;
  }

  .react-datepicker__triangle{
    ::after,
    ::before{
    display: none;
    }
  }

  .react-datepicker__header{
    display: none;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box{
    width: 100%;
    background: transparent;
    border-radius: 0;

  }

  .react-datepicker__time-container {
    background: transparent;
    width: 100%;
  }

  .react-datepicker__time-container .react-datepicker__time{
    background: transparent;
  }


  .react-datepicker__time-list {

    /* width */
    ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 30px #f2f2f2;
    border-radius: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 12px;
  }
  }

  .react-datepicker__time-list-item {
    border-radius: 4px;
    margin-right: 20px;
    font-size: 14px;
    font-family: var(--title-font);
    font-style: normal;
    font-weight: 600;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
    height: 32px;
    padding: 8px;
    color: #fff;

    :hover,
    :focus{
      background-color: #fff;
      color: ${props => props.theme.colors.primaryBlueColor};
    }
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{
    background-color: #fff;
    color: ${props => props.theme.colors.primaryBlueColor};
  }

  .react-datepicker__time-list-item.react-datepicker__time-list-item--selected{
    opacity: 0.7;
  }

`;

export const TimePickerCastom = styled(DatePicker)`
padding: 12px 14px;
  width: 100%;
  color: ${props => props.theme.colors.dateNumberColor};
  font-size: 14px;
  font-family: var(--title-font);
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  border: none;
  background-color: ${props => props.theme.colors.taskModalInputColor};
  border-radius: 8px;
  outline: none;

  :focus {
    box-shadow: 0px 2px 4px 0px #1111111a;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
  }
`;
