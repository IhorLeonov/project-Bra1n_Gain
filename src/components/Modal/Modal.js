import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import { Backdrop, ModalFeedbackContainer, CloseIcon } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({children}) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal());

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        handleToggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Backdrop>
      <ModalFeedbackContainer>
        <CloseIcon onClick={handleToggleModal}></CloseIcon>
        {children}
      </ModalFeedbackContainer>
    </Backdrop>,
    modalRoot
  );
};
