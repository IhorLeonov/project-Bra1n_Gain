import styled from 'styled-components';

export const TasksList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  padding: 0px;
  padding-bottom: 44px;
  margin-top: 16px;
  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @media screen and (min-width: 1280px) {
    gap: 27px;
  }
`;
