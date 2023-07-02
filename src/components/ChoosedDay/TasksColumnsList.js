import { TasksColumn } from './TasksColumn/TasksColumn';
import { TasksList } from './TasksColumnsList.styled';

import { isSameDay, parseISO } from 'date-fns';

export const TasksColumnsList = ({ date, tasks }) => {

  const todoTasks = tasks.filter(task => task.category === 'to-do');
  const inProgressTasks = tasks.filter(task => task.category === 'in-progress');
  const doneTasks = tasks.filter(task => task.category === 'done');

  const toDo = todoTasks.filter(todo => isSameDay(date, parseISO(todo.date)));
  const inProgress = inProgressTasks.filter(inProgress =>
    isSameDay(date, parseISO(inProgress.date))
  );
  const done = doneTasks.filter(done => isSameDay(date, parseISO(done.date)));

  return (
    <TasksList>
      <TasksColumn listId="to-do" date={date} tasks={toDo} />
      <TasksColumn listId="in-progress" date={date} tasks={inProgress} />
      <TasksColumn listId="done" date={date} tasks={done} />
    </TasksList>
  );
};
