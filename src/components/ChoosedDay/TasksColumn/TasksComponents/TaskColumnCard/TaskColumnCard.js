import { Card, TextTask } from "./TaskColumnCard.styled"
import { Toolbar } from './Toolbar/Toolbar';

export const TaskColumnCard = ({task}) => {

  return(
    <Card>
      <TextTask>{task}</TextTask>
      <Toolbar/>
    </Card>
  )
}