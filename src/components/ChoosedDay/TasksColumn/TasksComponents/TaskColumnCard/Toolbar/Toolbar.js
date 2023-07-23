import { SectionToolbar, TaskAction, Icon } from './Toolbar.styled';
import { useDispatch } from 'react-redux';
import {
  setModalAction,
  toggleModal,
  setDataTask,
  setModalTypeTask,
} from 'redux/modal/modalSlice';
import { deleteTask } from 'redux/task/operations';

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
        <Icon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite.svg#icon-arrow-circle-broken-right-16x16'
            }
          ></use>
        </Icon>
      </TaskAction>
      <TaskAction onClick={handleOpenModalEdit}>
        <Icon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite.svg#icon-pencil-16x16'
            }
          ></use>
        </Icon>
      </TaskAction>
      <TaskAction onClick={handleDeleteTask}>
        <Icon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite.svg#icon-trash-16x16'
            }
          ></use>
        </Icon>
      </TaskAction>
    </SectionToolbar>
  );
};
