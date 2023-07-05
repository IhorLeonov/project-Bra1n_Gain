import { List, ListItem, Text } from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
  return (
    <div>
      <List>
        <ListItem>
          <Text>By Day</Text>
        </ListItem>
        <ListItem>
          <Text>By Month</Text>
        </ListItem>
      </List>
    </div>
  );
};
