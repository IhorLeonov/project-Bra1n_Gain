import { TasksColumn } from './TasksColumn/TasksColumn';
import { TasksList } from './TasksColumnsList.styled';

export const TasksColumnsList = ({ date }) => {
  return (
    <TasksList>
      <TasksColumn listId="toDo" date={date} />
      <TasksColumn listId="inProgress" date={date} />
      <TasksColumn listId="done" date={date} />
    </TasksList>
  );
};