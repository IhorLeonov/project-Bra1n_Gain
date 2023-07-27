import styled from 'styled-components';

export const SectionToolbar = styled.div`
  display: flex;
  gap: 10px;
`;

export const TaskAction = styled.button`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.colors.textColor};
  // transition: stroke 0.5s ease;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colors.primaryBlueColor};
  }
`;
