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
     @media screen and (min-width: 1280xpx) {
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
background: inherit;
cursor: pointer;
height: 100%;
padding-top: 10px;
width: 70px;

`;

export const VisionIcons = styled(VisionIconsLogIn)`
color: ${props => props.theme.colors.buttonsColor};
width: 24px;
height: 24px;
`;

export const WrapperBtn = styled.div`
 @media screen and (min-width: 768px) {
margin-top: 70px;
    }
`;





