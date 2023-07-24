import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 14px;
`;

export const ListItem = styled.li`
  position: relative;
display: flex;
gap: 8px;
align-items: center;

  &::before {
    content: '';
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
    color: ${props => props.theme.colors.textColorStatistic};

  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
`;
