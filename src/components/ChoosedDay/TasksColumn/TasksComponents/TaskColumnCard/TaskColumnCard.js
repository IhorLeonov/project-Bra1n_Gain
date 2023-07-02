import { useAuth } from 'hooks/useAuth';
import {
  Avatar,
  Card,
  ContainerDataUser,
  TextTask,
  WrapperToolbar,
  Priority,
} from './TaskColumnCard.styled';
import { Toolbar } from './Toolbar/Toolbar';
import { modalType, selectShowModal } from 'redux/modal/selector';
import { useSelector } from 'react-redux';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { useState } from 'react';
import { ToolBarTaskModal } from "./ToolBarTaskModal/ToolBarTaskModal";

export const TaskColumnCard = ({
  task,
  listId,
}) => {

  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const [ targetElement, setTargetElement] = useState(null)

  // const isModalOpen = useSelector(selectShowModal);
  const modalTypeSelected = useSelector(modalType)

  const isModalOpen = useSelector(selectShowModal);
  // console.log(isModalOpen)
  const {
    user: { avatarUrl },
  } = useAuth();
  const { priority, title, _id } = task;

  return (
    <Card id="targetElement">

      <TextTask>{title}</TextTask>
      {isModalOpen && <TaskModal></TaskModal>}
      <Toolbar />
      {/* <TaskModal  listId={listId} targetElement={document.getElementById('targetElement')}/> */}

      <WrapperToolbar>
        <ContainerDataUser>
          <Avatar src={avatarUrl} alt="avatar" />
          <Priority>{priority}</Priority>
        </ContainerDataUser>
        <Toolbar
          setTaskModalOpen={setTaskModalOpen}
          setTargetElement={setTargetElement}
        />
      {taskModalOpen && <ToolBarTaskModal taskId={_id } listId={listId} targetElement={targetElement} setTaskModalOpen={setTaskModalOpen}/>}

      </WrapperToolbar>
      {modalTypeSelected === "task" && isModalOpen && (<TaskModal></TaskModal>)}
    </Card>
  );
};
