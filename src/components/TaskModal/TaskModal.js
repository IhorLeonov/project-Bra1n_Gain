import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';

// import { useDispatch } from 'react-redux';
// import { setModalTypeTask, toggleModal } from 'redux/modal/modalSlice';

export const TaskModal = () => {
  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(toggleModal());
  //   dispatch(setModalTypeTask())
  // };

  return (
    <Modal>
      <TaskForm></TaskForm>
    </Modal>
  );
};
