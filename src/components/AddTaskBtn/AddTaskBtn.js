import { FiPlus } from 'react-icons/fi';
import { AddTask, Div, Text } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ listId, handleAddTask}) => {
  
  return (
    <Div>
      <AddTask id={listId} type="button" onClick={handleAddTask}>
        <FiPlus size={24} />
        <Text>Add task</Text>
      </AddTask>
    </Div>
  );
};
