import { List, ListItem } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const ColumnTasksList = ({
  columnId,
  listId,
  tasks,
  setIsDraggingOver,
}) => {
  const emptyArrey = arr => arr.length === 0;

  const getListStyle = (isDraggingOver, empty) => {
    setIsDraggingOver(isDraggingOver);
    return {
      paddingBottom: empty && '1px',
    };
  };

  return (
    <Droppable droppableId={columnId} isDropDisabled={false} style={{height: "100%"}}>
      {(provided, snapshot) => (
        <List
          empty={emptyArrey(tasks)}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver, emptyArrey(tasks))}
          {...provided.droppableProps}
        >
          {tasks.map((e, index) => (
            <Draggable key={e._id} draggableId={e._id} index={index}>
              {(provided, snapshot) => (
                <ListItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskColumnCard
                    listId={listId}
                    task={e}
                    isDragging={snapshot.isDragging}
                  />
                </ListItem>
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
};
