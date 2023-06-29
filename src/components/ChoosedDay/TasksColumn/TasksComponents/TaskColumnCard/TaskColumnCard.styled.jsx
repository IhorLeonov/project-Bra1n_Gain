import styled from "styled-components"

export const Card = styled.div`
padding: 14px 14px 18px 14px;
width: 100%;
height: 100%;
background-color: #F7F6F9;
border: 1px solid #DCE3E5CC;
border-radius: 8px;

display: flex;
flex-direction: column;
gap: 32px;
margin-bottom: 14px;

@media (min-width: 768px) {
  height: 112px;
  margin-bottom: 18px;
}
`;

export const TextTask = styled.p`
width: 300px;
hieght: 112px;
margin-bottom: 28px;
background-color: tomato;
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
export const Toolbar = styled.div`
padding: 14px 14px 18px 14px;
width: 100%;
height: 100%;
background-color: #F7F6F9;
border: 1px solid #DCE3E5CC;
border-radius: 8px;

`;

export const CardInfo = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const StyledInfo = styled.div`
display: flex;
gap: 8px;
`;

export const UserLogo = styled.div`
font-size: 18px;
font-weight: 600;
line-height: 1.3;
color: black;

background: linear-gradient(
  0deg,
  rgba(228, 216, 30, 0.7147233893557423) 9%,
  rgba(241, 255, 13, 0.8155637254901961) 100%
);
& img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
display: flex;
justify-content: center;
align-items: center;
width: 32px;
height: 32px;
border-radius: 50%;
border: 1.8px solid ${props => props.theme.Accent};
overflow: hidden;
`;

const PriorityColor = props => {
  switch (props.children) {
    case 'low':
      return props.theme.bcgPriorityLowStrong;
    case 'medium':
      return props.theme.bcgPriorityMediumStrong;
    case 'high':
      return props.theme.bcgPriorityHighStrong;
    default:
      return 'tomato';
  }
};

export const PriorityTitle = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PriorityColor};
  color: ${props => props.theme.Primary};

  align-self: flex-end;
`;
