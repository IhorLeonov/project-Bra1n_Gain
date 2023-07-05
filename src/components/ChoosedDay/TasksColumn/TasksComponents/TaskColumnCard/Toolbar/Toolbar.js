import { SectionToolbar, TaskAction, Icon } from './Toolbar.styled';
import { useDispatch } from 'react-redux';
import {
  setModalAction,
  toggleModal,
  setDataTask,
  setModalTypeTask,
} from 'redux/modal/modalSlice';
import { deleteTask } from 'redux/task/operations';
import { ReactComponent as IconArrow } from 'shared/icons/icon-arrow-circle-broken-right-16x16.svg';
import { ReactComponent as IconPencil } from 'shared/icons/icon-pencil-16x16.svg';
import { ReactComponent as IconTrash } from 'shared/icons/icon-trash-16x16.svg';

export const Toolbar = ({ setTargetElement, setTaskModalOpen, task }) => {
  const dispatch = useDispatch();

  const { _id } = task;

  const handleClick = e => {
    setTaskModalOpen(true);
    setTargetElement(e.target);
  };

  const handleOpenModalEdit = e => {
    dispatch(toggleModal());
    dispatch(setModalAction('edit'));
    dispatch(setModalTypeTask());
    dispatch(setDataTask(task));
  };

  const handleDeleteTask = e => {
    dispatch(deleteTask(_id));
  };

  return (
    <SectionToolbar>
      <TaskAction onClick={handleClick}>
        <Icon as={IconArrow} alt="button-move" />
      </TaskAction>
      <TaskAction onClick={handleOpenModalEdit}>
        <Icon as={IconPencil} alt="button-edit" />
      </TaskAction>
      <TaskAction onClick={handleDeleteTask}>
        <Icon as={IconTrash} alt="button-delete" />
      </TaskAction>
    </SectionToolbar>
  );
};
