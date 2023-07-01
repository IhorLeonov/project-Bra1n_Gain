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
import { selectShowModal } from 'redux/modal/selector';
import { useSelector } from 'react-redux';
import { TaskModal } from 'components/TaskModal/TaskModal';

export const TaskColumnCard = ({
  task,
  listId,
  setTargetElement,
  setTaskModalOpen,
}) => {
  const isModalOpen = useSelector(selectShowModal);
  // console.log(isModalOpen)
  const {
    user: { avatarUrl },
  } = useAuth();
  const { priority = 'low' } = task;

  return (
    <Card id="targetElement">
      <TextTask>{task}</TextTask>
      <Toolbar />
      {isModalOpen && <TaskModal></TaskModal>}
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
      </WrapperToolbar>
    </Card>
  );
};
