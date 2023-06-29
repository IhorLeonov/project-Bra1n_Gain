import styled from 'styled-components';

import { AiOutlinePlusCircle } from 'react-icons/ai';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
`;

export const ColumnTitle = styled.h3`
  font-family: 'InterSemiBolt';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: #111111;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Icon = styled(AiOutlinePlusCircle)`
  width: 22px;
  height: 22px;
  fill: black;
`;

export const BtnAddTop = styled.button`
  border: none;
  background-color: transparent;
  width: 22px;
  height: 22px;
`;
