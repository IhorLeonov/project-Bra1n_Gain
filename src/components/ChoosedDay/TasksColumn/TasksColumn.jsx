import { ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';

export const TasksColumn = ({ listId, date, tasks }) => {
  return (
    <ColumnsItem>
      <ColumnHeadBar title={listId} />

      <ColumnTasksList listId={listId} tasks={tasks} />
      {/* <AddTaskBtn listId={listId} date={date}/> */}
    </ColumnsItem>
  );
};
