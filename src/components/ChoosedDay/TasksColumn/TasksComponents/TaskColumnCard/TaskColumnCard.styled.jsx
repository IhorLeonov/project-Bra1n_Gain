import styled from "styled-components"

export const Card = styled.div`
position: relative;
padding: 14px 14px 18px 14px;
width: 100%;
height: 100%;
background-color: #F7F6F9;
border: 1px solid #DCE3E5CC;
border-radius: 8px;
`;

export const TextTask = styled.p`
margin-bottom: 24px;

color: #111;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
font-size: 14px;
font-family: Inter;
font-weight: 500;
line-height: 1.3;

@media screen and (min-width: 768px) {
  margin-bottom: 28px;
  }
`

export const WrapperToolbar = styled.div`
position: relative;
display: flex;
align-items: self-end;
justify-content: space-between;
`;

export const ContainerDataUser = styled.div`
display: flex;
align-items: self-end;
gap: 8px;
`;

export const Avatar = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;

export const Priority = styled.span`
font-size: 10px;
font-family: Inter;
font-weight: 600;
line-height: 1.2;

color: #F7F6F9;
padding: 4px 12px;
border-radius: 4px;
background-color: ${props => props.children === "low" ? "#72C2F8" : props.children === "medium" ? "#F3B249" : "#EA3D65"};
`;



