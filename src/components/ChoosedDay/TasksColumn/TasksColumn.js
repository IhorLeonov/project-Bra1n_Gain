import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';

import { useDispatch } from 'react-redux';

import { setModalTypeTask, toggleModal } from 'redux/modal/modalSlice';

export const TasksColumn = ({ listId, date, tasks }) => {
  const dispatch = useDispatch();

  const handleAddTaskButtonClick = () => {
    dispatch(setModalTypeTask());
    dispatch(toggleModal());
  };

  return (
    <ColumnsItem>
      <ColumnHeadBar title={listId} />

      <ColumnTasksList
        listId={listId}
        tasks={tasks}
      />

      {/* //! Это Руслана код */}
      {/* <AddTaskBtn listId={listId}  date={date}/> */}

      {/* //! Это я вставил - Никита */}
      <AddTaskBtn listId={listId} handleAddTask={handleAddTaskButtonClick} />
    </ColumnsItem>
  );
};
