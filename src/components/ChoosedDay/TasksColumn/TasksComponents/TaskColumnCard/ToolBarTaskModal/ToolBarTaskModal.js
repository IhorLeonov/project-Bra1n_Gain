import { Icon } from '../Toolbar/Toolbar.styled';
import { BtnMoove, Lable, ModalCardTask } from './ToolBarTaskModal.styled';
import { createPortal } from 'react-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { changeTaskCategory } from 'redux/task/operations';

const modalRoot = document.querySelector('#modal-root');

export const ToolBarTaskModal = ({
  listId,
  targetElement,
  setTaskModalOpen,
  taskId
}) => {

  const dispatch = useDispatch();

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const modalRef = useRef();

  const moove = {
    "to-do": 'To do',
    "in-progress": 'In progress',
    "done": 'Done',
  };

  const arrMoove = Object.keys(moove);
  const mooveTask = arrMoove.filter(e => e !== listId);

  const handleOutsideClick = useCallback(
    event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setTaskModalOpen(false);
      }
    },
    [setTaskModalOpen]
  );

  useEffect(() => {
    const updateModalPosition = () => {
      if (targetElement) {
        const targetRect = targetElement.getBoundingClientRect();
        const isMobile = window.innerWidth < 768;
        const topOffsetX = isMobile ? targetRect.height + 12 : targetRect.height + 8;
        const topOffsetY = isMobile ? targetRect.left - 70 : targetRect.left;
        setModalPosition({
          top: targetRect.top + topOffsetX,
          left: topOffsetY,
        });
      }
    };

    updateModalPosition();

    window.addEventListener('resize', updateModalPosition);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('resize', updateModalPosition);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetElement]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setTaskModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const handleMooveTask = (e) => {
  const category = e.currentTarget.getAttribute('data-moove');

  dispatch(changeTaskCategory({id: taskId, category} ))
  
}

  return createPortal(
    <ModalCardTask
      style={{ top: modalPosition.top, left: modalPosition.left }}
      ref={modalRef}
    >
      {mooveTask.map(e => (
        <li  key={e}>
          <BtnMoove onClick={handleMooveTask} data-moove={e}>
            <Lable>{moove[e]}</Lable>
            <Icon
              src={
                process.env.PUBLIC_URL +
                '/images/icons/icon-arrow-circle-broken-right-16x16.svg'
              }
              alt="button-move"
            />
          </BtnMoove>
        </li>
      ))}
    </ModalCardTask>,
    modalRoot
  );
};
