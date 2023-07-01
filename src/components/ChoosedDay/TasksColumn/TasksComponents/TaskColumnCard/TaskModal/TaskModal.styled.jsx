import styled from "styled-components"
import { TaskAction } from "../Toolbar/Toolbar.styled";

export const ModalCardTask = styled.ul`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 14px;
padding: 14px;
width: 147px;
height: 90px;
background-color: #FFFFFF;
border-radius: 8px;
box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
@media screen and (min-width: 768px) {
padding: 20px 24px;
    
  }
`;


export const BtnMoove = styled(TaskAction)`
display: flex;
width: 87px;
align-items: center;
justify-content: space-between;

color: #343434;

@media screen and (min-width: 768px) {
width: 99px;
    
    }
`
export const Lable = styled.p`
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 1.2;

@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 1.3;
    
  }
`


