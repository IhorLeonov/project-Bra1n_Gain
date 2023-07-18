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

import { useState } from 'react';
import { ToolBarTaskModal } from "./ToolBarTaskModal/ToolBarTaskModal";

export const TaskColumnCard = ({
  task,
  listId,
  provided, 
  isDragging
}) => {
  
  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const [ targetElement, setTargetElement] = useState(null)
  
  const {
    user: { avatarUrl },
  } = useAuth();
  const { priority, title, _id} = task;
  
  return (
        <Card
        isDragging={isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TextTask>{title}</TextTask>
          
          <WrapperToolbar>
            <ContainerDataUser>
              <Avatar src={avatarUrl} alt="avatar" />
              <Priority>{priority}</Priority>
            </ContainerDataUser>
            <Toolbar
              task={task}
              setTaskModalOpen={setTaskModalOpen}
              setTargetElement={setTargetElement}
            />
            {taskModalOpen && (
              <ToolBarTaskModal
                taskId={_id}
                listId={listId}
                targetElement={targetElement}
                setTaskModalOpen={setTaskModalOpen}
              />
            )}
          </WrapperToolbar>
        </Card>
  );
};
