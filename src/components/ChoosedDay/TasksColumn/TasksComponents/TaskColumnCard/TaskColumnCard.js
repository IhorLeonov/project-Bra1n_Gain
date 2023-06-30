import { Card, TextTask } from "./TaskColumnCard.styled"
import { Toolbar } from './Toolbar/Toolbar';
import { selectShowModal } from "redux/modal/selector";
import { useSelector } from "react-redux";

export const TaskColumnCard = ({task}) => {
  const isModalOpen = useSelector(selectShowModal)
  console.log(isModalOpen)

  return(
    <Card>
      <TextTask>{task}</TextTask>
      <Toolbar/>
    </Card>
  )
}