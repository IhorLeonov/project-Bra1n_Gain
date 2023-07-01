import styled from 'styled-components';

export const SectionToolbar = styled.div`
  display: flex;
  gap:10px;

`;

export const TaskAction = styled.button`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition-duration: 200ms;
  }

`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
`;
