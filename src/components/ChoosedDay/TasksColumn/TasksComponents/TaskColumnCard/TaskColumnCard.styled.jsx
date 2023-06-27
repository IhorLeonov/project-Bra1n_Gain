import styled from "styled-components"

export const Card = styled.div`
padding: 14px 14px 18px 14px;
width: 100%;
height: 100%;
background-color: #F7F6F9;
border: 1px solid #DCE3E5CC;
border-radius: 8px;

`;

export const TextTask = styled.p`
margin-bottom: 28px;

color: #111;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
font-size: 14px;
font-family: Inter;
font-weight: 500;
line-height: 1.3;

@media screen and (min-width: 768px) {
  margin-bottom: 32px;
  }
`