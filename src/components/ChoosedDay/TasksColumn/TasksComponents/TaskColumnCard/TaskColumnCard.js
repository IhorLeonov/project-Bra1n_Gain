import { Card, TextTask } from "./TaskColumnCard.styled"


export const TaskColumnCard = ({task}) => {

  return(
    <Card>
      <TextTask>{task}</TextTask>
    </Card>
  )
}