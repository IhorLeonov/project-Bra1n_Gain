import styled from 'styled-components';

export const ThemeIcon = styled.svg`
  fill: ${props => props.theme.componentAccent};
  height: 24px;
  width: 24px;

  @media (min-width: 765px) {
    height: 32px;
    width: 32px;
  }
`;

export const ToggleButton = styled.button`
  color: transparent;
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-right: 16px;
`;