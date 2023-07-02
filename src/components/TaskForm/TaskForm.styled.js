import styled from 'styled-components';
import { Field } from 'formik';
import { FiPlus } from 'react-icons/fi';

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 16px;

color: #343434CC;
font-size: 12px;
font-family: Inter;
font-style: normal;
font-weight: 500;
line-height: 1.2;

@media screen and (min-width: 768px) {
font-size: 14px;
font-weight: 600;
  line-height: 1.3;
margin-bottom: 18px;
}
`
export const LabelRadio  = styled.label`
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
cursor: pointer;
position: relative;

color: #343434;
font-size: 12px;
font-family: Inter;
font-style: normal;
font-weight: 600;
line-height: 1.2;

@media screen and (min-width: 768px) {
font-size: 14px;
font-weight: 600;
line-height: 1.3;
}
`;

export const Input = styled(Field)`
padding: 12px 14px;
width: 100%;

color: #343434;
font-size: 14px;
font-family: Inter;
font-style: normal;
font-weight: 600;
line-height: 1.3;
border: none;
background-color: #F6F6F6;
border-radius: 8px;
outline: none; 

:focus  {
  box-shadow: 0px 2px 4px 0px #1111111a;
  }

  @media screen and (min-width: 768px) {
padding: 14px 18px;
font-size: 14px;
font-weight: 600;
line-height: 1.3;
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
  background-color: ${props => props.value === "low" ? "#72C2F8" : props.value === "medium" ? "#F3B249" : "#EA3D65"};
  transition: all 0.3s ease;
text-align: center;


${Radio}:checked ~ & {
  width: 8px;
  height: 8px;
  
  @media screen and (min-width: 768px) {
    width: 10px;
  height: 10px;
}
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
  border: 1.3px solid ${props => props.value === "low" ? "#72C2F880" : props.value === "medium" ? "#F3B24980" : "#EA3D6580"};
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
@media screen and (min-width: 768px) {
  gap: 16px;
}
`;

export const ContainerForm = styled.div`
width: 100%;
padding: 48px 18px 40px;

@media screen and (min-width: 768px) {
  padding: 40px 28px;
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

  color: #FFF;
text-align: center;
font-size: 14px;
font-family: Inter;
font-style: normal;
font-weight: 600;
line-height: 1.3;

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
`

export const IconFiPlus = styled(FiPlus)`
    width: 18px;
    height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`
