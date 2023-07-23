import {useState} from 'react'
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';
import { useDispatch } from 'react-redux';
import { modalType, selectShowModal } from 'redux/modal/selector';
import { useSelector } from 'react-redux';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { setModalTypeTask, toggleModal, setModalAction, setCategory } from 'redux/modal/modalSlice';

export const TasksColumn = ({columnId, listId, tasks}) => {
  const dispatch = useDispatch();
  const modalTypeSelected = useSelector(modalType);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const isModalOpen = useSelector(selectShowModal);

  const handleAddTaskButtonClick = () => {
    dispatch(setModalTypeTask());
    dispatch(setModalAction("add"));
    dispatch(setCategory(listId));
    dispatch(toggleModal());
  };

  return (
    <ColumnsItem isDraggingOver={isDraggingOver}>
      <ColumnHeadBar title={listId} handleAddTask={handleAddTaskButtonClick}/>
      <ColumnTasksList columnId={columnId} listId={listId} tasks={tasks} setIsDraggingOver={setIsDraggingOver}/>
      <AddTaskBtn listId={listId} handleAddTask={handleAddTaskButtonClick} />
      {modalTypeSelected === 'task' && isModalOpen && <TaskModal></TaskModal>}
    </ColumnsItem>
  );
};
