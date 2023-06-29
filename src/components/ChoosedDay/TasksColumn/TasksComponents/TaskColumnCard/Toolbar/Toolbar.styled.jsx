import styled from 'styled-components';

export const SectionToolbar = styled.div`
  display: flex;
  background-color: tomato;
  width: 62px;
  box-sizing: content-box;
  padding: 0px;
  
  @media screen and (min-width: 768px) {
    background-color: tomato;
    width: 68px;
    box-sizing: content-box;
    padding: 0px;

  }
`;

export const TaskAction = styled.button`
  max-width: 14px;
  max-height: 14px;
padding: 0px;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    fill: green;
  }

  :not(:last-child) {
margin-right: 10px;
  }
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }

`;
