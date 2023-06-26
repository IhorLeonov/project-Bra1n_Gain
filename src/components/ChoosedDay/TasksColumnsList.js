import { TasksColumn } from './TasksColumn/TasksColumn';
import { TasksList } from './TasksColumnsList.styled';

import { useSelector } from 'react-redux';
import { isSameDay, parseISO } from 'date-fns';

export const TasksColumnsList = ({ date }) => {
  const tasks = useSelector(state => state.tasks.tasks);

  const todoTasks = tasks.filter(task => task.category === 'toDo');
  const inProgressTasks = tasks.filter(task => task.category === 'inProgress');
  const doneTasks = tasks.filter(task => task.category === 'done');

  const toDo = todoTasks.filter(todo => isSameDay(date, parseISO(todo.date)));
  const inProgress = inProgressTasks.filter(inProgress =>
    isSameDay(date, parseISO(inProgress.date))
  );
  const done = doneTasks.filter(done => isSameDay(date, parseISO(done.date)));

  return (
    <TasksList>
      <TasksColumn listId="toDo" date={date} tasks={toDo} />
      <TasksColumn listId="inProgress" date={date} tasks={inProgress} />
      <TasksColumn listId="done" date={date} tasks={done} />
    </TasksList>
  );
};
