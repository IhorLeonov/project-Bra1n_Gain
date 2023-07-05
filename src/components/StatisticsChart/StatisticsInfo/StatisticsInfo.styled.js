import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 36px;
`;

export const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -16px;
    bottom: 5px;
    display: inline-block;
    border-radius: 8px;
    width: 8px;
    height: 8px;
  }

  &:first-child::before {
    background-color: #ffd2dd;
  }

  &:last-child::before {
    background-color: #3e85f3;
  }
`;

export const Text = styled.p`
  color: #343434;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
