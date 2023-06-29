import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';
import { useState } from 'react';

export const TasksColumn = ({ listId, date, tasks }) => {
  // const [isOpen, setIsModalOpen] = useState(false);
  const [setIsModalOpen] = useState(false);

  const handleAddTask = () => setIsModalOpen(true);

  return (
    <ColumnsItem>
      <ColumnHeadBar title={listId} />

      <ColumnTasksList listId={listId} tasks={tasks} />
      {/* //! Это Руслана код */}
      {/* <AddTaskBtn listId={listId}  date={date}/> */}

      {/* //! Это я вставил - Никита */}
      <AddTaskBtn listId={listId} handleAddTask={handleAddTask} />
    </ColumnsItem>
  );
};
