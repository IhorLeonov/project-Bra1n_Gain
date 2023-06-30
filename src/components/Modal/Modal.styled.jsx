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
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1200;
`;

export const ModalFeedbackContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 469px;
  height: auto;
  padding: 28px 32px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  color: #000;
  cursor: pointer;
`;
