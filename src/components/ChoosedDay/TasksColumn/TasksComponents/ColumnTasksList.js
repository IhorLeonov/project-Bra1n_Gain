
import { List, ListItem } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const ColumnTasksList = ({
  columnId,
  listId,
  tasks
}) => {
  return (
    <Droppable droppableId={columnId} isDropDisabled={false}>
      {(provided) => (
        <List
        empty={tasks.length === 0}
          ref={provided.innerRef}
          {...provided.droppableProps}
          hasTasks={tasks[0]?.category === listId}
        >
          {tasks.map((e, index) => (
            <ListItem key={e._id}>
              <Draggable draggableId={e._id} index={index}>
      {(provided) => (
              <TaskColumnCard provided={provided} listId={listId} task={e} index={index} />
      )}
      </Draggable>
        </ListItem>
          ))}
          
          {provided.placeholder}
        </List>
          )}
        </Droppable> 
  );
};
