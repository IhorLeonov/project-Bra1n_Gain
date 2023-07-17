import { useEffect, useState } from 'react';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { TasksList } from './TasksColumnsList.styled';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { changeTaskCategory } from 'redux/task/operations';
import { useFilterTasksDay } from 'hooks/useFilterTasksDay';

window['__react-beautiful-dnd-disable-dev-warnings'] = true;

const category = { toDo: 'to-do', inProgress: 'in-progress', done: 'done' };

export const TasksColumnsList = ({ date, tasks }) => {
  const dispatch = useDispatch();
  const tasksDay = useFilterTasksDay(tasks, date);
  const [tasksDrop, setTasksDrop] = useState(tasksDay);

  useEffect(() => {
    setTasksDrop(tasksDay);
  }, [tasksDay]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (
    draggableId,
    source,
    destination,
    droppableSource,
    droppableDestination
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    dispatch(
      changeTaskCategory({
        id: draggableId,
        category: category[droppableDestination.droppableId],
      })
    );
    return result;
  };

  const onDragEnd = async result => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }
    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(tasksDrop[sInd], source.index, destination.index);
      const newState = { ...tasksDrop };
      newState[sInd] = items;
      setTasksDrop(newState);
    } else {
      const result = move(
        draggableId,
        tasksDrop[sInd],
        tasksDrop[dInd],
        source,
        destination
      );
      const newState = { ...tasksDrop };
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setTasksDrop(newState);
    }
  };

  return (
    <TasksList>
    <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasksDrop).map(columnId => (
              <TasksColumn
                columnId={columnId}
                listId={category[columnId]}
                date={date}
                tasks={tasksDrop[columnId]}
              />
        ))}
    </DragDropContext>
      </TasksList>
  );
};
