import styled from "styled-components"

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 14px;
list-style: none;
width: 100%;
height: 356px;

  overflow: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  @media screen and (min-width: 768px) {
  height: 372px;
  gap: 18px;
  }

`;

export const ListItem = styled.li`
max-width: 300px;
height: 108px;

@media screen and (min-width: 768px) {
  height: 112px;
  }
`;