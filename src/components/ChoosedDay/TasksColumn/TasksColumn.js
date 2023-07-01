import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';
import { useState } from 'react';
import { TaskModal } from "./TasksComponents/TaskColumnCard/TaskModal/TaskModal";
export const TasksColumn = ({ listId, date, tasks }) => {
  // const [isOpen, setIsModalOpen] = useState(false);
  const [setIsModalOpen] = useState(false);

  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const [ targetElement, setTargetElement] = useState(null)

  const handleAddTask = () => setIsModalOpen(true);

  return (

    <ColumnsItem>

      {taskModalOpen && <TaskModal  listId={listId} targetElement={targetElement} setTaskModalOpen={setTaskModalOpen}/>}

      <ColumnHeadBar title={listId} />

      <ColumnTasksList listId={listId} tasks={tasks} setTaskModalOpen={setTaskModalOpen} setTargetElement={setTargetElement}/>
      {/* //! Это Руслана код */}
      {/* <AddTaskBtn listId={listId}  date={date}/> */}

      {/* //! Это я вставил - Никита */}
      <AddTaskBtn listId={listId} handleAddTask={handleAddTask} />
    </ColumnsItem>

  );
};
