import styled from "styled-components";
import { Form } from 'formik';
import VisionIconsLogIn from 'components/VisionIconsLogIn/VisionIconsLogIn.js';




export const FormStyle = styled(Form)`
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
export const InputWrapper = styled.div`
position: relative;
`;

export const BtnToggleVisiblePassord = styled.button`
position: absolute;
top: 0;
right: 0;
cursor: pointer;
height: 100%;
padding-top: 10px;
    width: 70px;

`;

export const VisionIcons = styled(VisionIconsLogIn)`
color: rgba(62, 133, 243, 1);
    width: 24px;
    height: 24px;

`;





