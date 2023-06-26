import { Container, ColumnsItem } from './TasksColumn.styled';
import { ColumnHeadBar } from './TasksComponents/ColumnHeadBar';
import { ColumnTasksList } from './TasksComponents/ColumnTasksList';

export const TasksColumn = ({ listId, date, tasks }) => {
  return (
    <ColumnsItem>
      <Container>
        <ColumnHeadBar title={listId} />
      </Container>

      <ColumnTasksList listId={listId} tasks={tasks} />
      {/* <AddTaskBtn listId={listId} date={date}/> */}
    </ColumnsItem>
  );
};
