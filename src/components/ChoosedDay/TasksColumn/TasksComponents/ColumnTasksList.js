// import { nanoid } from 'nanoid';
import { List, ListItem } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';

export const ColumnTasksList = ({
  listId,
  setTargetElement,
  setTaskModalOpen,
  tasks
}) => {

  return (
    <List>
      {tasks.map(e => (
        <ListItem key={e._id}>
          <TaskColumnCard
            listId={listId}
            task={e}
            setTaskModalOpen={setTaskModalOpen}
            setTargetElement={setTargetElement}
          />
        </ListItem>
      ))}
    </List>
  );
};
