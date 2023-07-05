import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: auto;
  height: auto;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.modalBorderColor};
  background: ${props => props.theme.colors.modalBgColor};
  box-shadow: 0px 4px 16px 0px #1111111a;
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.notFoundTextColor};
  cursor: pointer;

  &:hover {
    color: #3e85f3;
  }
`;
