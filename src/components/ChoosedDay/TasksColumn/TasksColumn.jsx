import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';

export const TasksColumn = ({ listId, date }) => {
  return (
    <>
      <ColumnHeadBar title={listId} />
      <ColumnTasksList listId={listId} />
      {/* <AddTaskBtn/> */}
    </>
  );
};
