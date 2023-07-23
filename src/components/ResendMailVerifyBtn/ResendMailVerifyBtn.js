import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import { ResendBtn } from './ResendMailVerifyBtn.styled';

export const ResendMailVerifyBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <ResendBtn
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggleModal}
        type="button"
      >
        {isHovered
          ? 'Resend Mail'
          : 'Problems with the mail verification letter?'}
      </ResendBtn>
    </>
  );
};
