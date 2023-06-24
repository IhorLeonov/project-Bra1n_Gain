import styled from "styled-components";
import { Form, Field } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: rgba(255, 255, 255, 1); 
  border-radius: 16px;
   padding: 40px 18px;

    @media screen and (min-width: 1440px) {
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
     @media screen and (min-width: 1440px) {
        width: 758px;
    }
`;

export const BtnUploadAvatar = styled(Field)`
opacity: 1;
position: absolute;
bottom: 92%;
right: 23%;
overflow: hidden;
width: 14px;
height: 14px;
border-radius: 50%;

 @media screen and (min-width: 768px) {
       width: 24px;
       height: 24px;
       bottom: 31%;
       right: 14%;
    }
`;

export const Avatar = styled.img`
  border-radius: inherit;
`;

export const LabelAvatar = styled.label`
position: relative;
margin: 0 auto;
margin-bottom: 40px;
text-align: center;
`;


export const AvatarWrapper = styled.div`
position: absolute;
top: -71px;
width: 72px;
margin: 0 auto;
border: 2px solid rgba(62, 133, 243, 1);
border-radius: 50%;

 @media screen and (min-width: 768px) {
       top: 0;
       width: 124px;
       left: -17%;
    }
`;

export const UserName = styled.p`
margin-top: 18px;

font-size: 14px;
font-weight: 700;

 @media screen and (min-width: 768px) {
    margin-top: 144px;
      font-size: 18px;
      margin-bottom: 8px;
    }
`;

export const UserLabel = styled.span`
font-size: 12px;
font-weight: 600;
line-height: 1.17;

 @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
    }
`;

export const Input = styled(Field)`
width: 100%;
height: 40px;
border-radius: 8px;
border: 1px solid rgba(17, 17, 17, 0.1);
outline: none;
margin-top: 8px;
margin-bottom: 18px;
padding: 12px 14px;
font-weight: 600;
font-size: 14px;
line-height: 1.3;

 @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    }

@media screen and (min-width: 1440px) {
   width: 354px;
    }
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
font-weight: 400;
font-size: 12px;
line-height: 1.17;
color: rgba(17, 17, 17, 1);

 @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
    }
`;

export const MainFieldWrapper = styled.div`
 @media screen and (min-width: 1440px) {
    display: flex;
   flex-wrap: wrap;
   gap: 50px;
   margin-bottom: 70px;
    }
`;
export const BlockFieldWrapper = styled.div`
 @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;

    }
`;


export const SubmitBtn = styled.button`
  margin: 0 auto;
  margin-top: 22px;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: rgba(62, 133, 243, 1);
  color: rgba(255, 255, 255, 1);
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
border-radius: 8px;
border: 1px solid rgba(17, 17, 17, 0.1);
outline: none;
margin-top: 8px;
margin-bottom: 18px;
padding: 12px 14px;
font-weight: 600;
font-size: 14px;
line-height: 1.3;

 @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.3;
    }

@media screen and (min-width: 1440px) {
   width: 354px;
    }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    background-color: rgba(62, 133, 243, 1);
    border-radius: 16px;
    overflow: hidden;
    border: none;
    color: rgba(255, 255, 255, 1);
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

    background-color: rgba(62, 133, 243, 1);
    border-bottom: 1px solid rgba(62, 133, 243, 1);
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

    @media screen and (min-width: 1440px) {
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
      background: var(--color-button-period-type);
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary-text-color);
    }
  }

  .react-datepicker__current-month {
    margin-top: 15px;
    margin-bottom: 11px;
    font-size: 20px;
    font-weight: 600;
    line-height : 1.2;

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
      background-color: var(--auth-bg-color);
      color: var(--hover-btn-background-color);
      border-radius: 24px;
      opacity: 0.7;
    }
  }



  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 1));
    opacity: 40%;
  }


    .react-datepicker__day--today,
  .react-datepicker__day--selected {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(62, 133, 243, 1);
    border-radius: 50%;
    opacity: 1;
  }

    .react-datepicker__day--keyboard-selected{
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




