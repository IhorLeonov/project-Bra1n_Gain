import { ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';

export const TasksColumn = ({ listId, date, tasks }) => {
  return (
    <ColumnsItem>
      <ColumnHeadBar title={listId} />

      <ColumnTasksList listId={listId} tasks={tasks} />
      {/* //! Это Руслана код */}
      {/* <AddTaskBtn listId={listId}  date={date}/> */}

      {/* //! Это я вставил - Никита */}
      {/* <AddTaskBtn listId={listId} handleAddTask={handleAddTask} /> */}
    </ColumnsItem>
  );
};
