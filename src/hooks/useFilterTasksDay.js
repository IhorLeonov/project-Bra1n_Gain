import { useCallback} from 'react';
import { isSameDay, parseISO } from 'date-fns';



export const useFilterTasksDay = (tasks, date) => {
  const result = useCallback(() => {
    const todoTasks = tasks.filter(task => task.category === 'to-do');
    const inProgressTasks = tasks.filter(task => task.category === 'in-progress');
    const doneTasks = tasks.filter(task => task.category === 'done');
    
    const toDo = todoTasks.filter(todo => isSameDay(date, parseISO(todo.date)));
    const inProgress = inProgressTasks.filter(inProgress =>
      isSameDay(date, parseISO(inProgress.date))
      );
    const done = doneTasks.filter(done => isSameDay(date, parseISO(done.date)));
      
  return {toDo,inProgress, done}
  },[tasks, date]);
  return result
}