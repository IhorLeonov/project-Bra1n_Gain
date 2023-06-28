import { List, ListItem } from "./ColumnTasksList.styled";
import { TaskColumnCard } from "./TaskColumnCard/TaskColumnCard";

export const ColumnTasksList = ({ listId }) => {

  const test = ["Euer esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem.", "Euer esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem.", "Eue esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem.", "Eu esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem."]
  return (
    <List>
      {test.map( e => (<ListItem key={e}>
        <TaskColumnCard task={e}/>
      </ListItem>))}
    </List>
  );
};
