import styled from 'styled-components';

import { AiOutlinePlusCircle } from 'react-icons/ai';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const ColumnTitle = styled.h3`
  font-family: 'InterSemiBolt';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: ${props => props.theme.colors.textColor};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Icon = styled(AiOutlinePlusCircle)`
  width: 22px;
  height: 22px;
  fill: ${props => props.theme.colors.textColor};
  border-radius: 50%;
  &:hover,
  &:focus {
    fill: ${props => !props.page && '#fff'};
    background-color: ${props => !props.page && '#3e85f3'};
    transform: ${props => !props.page && 'scale(1.12)'};
    transition-duration: ${props => !props.page && '500ms'};
  }
`;

export const BtnAddTop = styled.button`
  border: none;
  background-color: transparent;
  width: 22px;
  height: 22px;
`;
