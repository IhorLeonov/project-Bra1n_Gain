import { SectionToolbar, TaskAction, Icon } from './Toolbar.styled';
import { useDispatch } from 'react-redux';
import { setModalAction, toggleModal, setDataTask, setModalTypeTask } from 'redux/modal/modalSlice';

export const Toolbar = ({ setTargetElement, setTaskModalOpen, task }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    setTaskModalOpen(true);
    setTargetElement(e.target);
  };

  const handleOpenModalEdit = e => {
    dispatch(toggleModal());
    dispatch(setModalAction("edit"));
    dispatch(setModalTypeTask());
    dispatch(setDataTask(task));
  };

  return (
    <SectionToolbar>
      <TaskAction onClick={handleClick}>
        <Icon
          src={
            process.env.PUBLIC_URL +
            '/images/icons/icon-arrow-circle-broken-right-16x16.svg'
          }
          alt="button-move"
        />
      </TaskAction>
      <TaskAction onClick={handleOpenModalEdit}>
        <Icon
          src={process.env.PUBLIC_URL + '/images/icons/icon-pencil-16x16.svg'}
          alt="button-edit"
        />
      </TaskAction>
      <TaskAction>
        <Icon
          src={process.env.PUBLIC_URL + '/images/icons/icon-trash-16x16.svg'}
          alt="button-delete"
        />
      </TaskAction>
    </SectionToolbar>
  );
};
