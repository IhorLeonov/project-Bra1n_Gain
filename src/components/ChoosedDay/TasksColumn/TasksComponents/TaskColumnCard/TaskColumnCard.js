import { useAuth } from "hooks/useAuth";
import { Avatar, Card, ContainerDataUser, TextTask, WrapperToolbar, Priority } from "./TaskColumnCard.styled"
import { Toolbar } from './Toolbar/Toolbar';
// import {TaskModal} from "./TaskModal/TaskModal"



export const TaskColumnCard = ({task, listId, setTargetElement, setTaskModalOpen}) => {
  const {user: {avatarUrl}} = useAuth();
  const { priority = "low"} = task;

  return(
    <Card id="targetElement">
      <TextTask>{task}</TextTask>
            {/* <TaskModal  listId={listId} targetElement={document.getElementById('targetElement')}/> */}

      <WrapperToolbar>
        <ContainerDataUser>
        <Avatar src={avatarUrl} alt="avatar" />
        <Priority>{priority}</Priority>
        </ContainerDataUser>
      <Toolbar setTaskModalOpen={setTaskModalOpen} setTargetElement={setTargetElement}/>
      </WrapperToolbar>
    </Card>
  )
}