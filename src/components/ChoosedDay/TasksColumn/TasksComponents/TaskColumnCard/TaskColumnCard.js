import { Card, TextTask, CardInfo, StyledInfo, UserLogo, PriorityTitle } from "./TaskColumnCard.styled"
import { Toolbar, } from './Toolbar/Toolbar';
import { useAuth } from 'hooks/useAuth';



export const TaskColumnCard = ({task}) => {
  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const { name, userImgUrl } = useAuth();

  const avatar = userImgUrl ? (
    <img src={userImgUrl} alt="UserPicture" />
  ) : (
    <p className="initials">{getInitials(name)}</p>
  ); 

  return(
    <Card>
<TextTask>{task.title}</TextTask>
      <CardInfo>
        <StyledInfo>
          <UserLogo>{avatar}</UserLogo>
          <PriorityTitle>{task.priority}</PriorityTitle>
        </StyledInfo>
      <Toolbar />
      </CardInfo>
    </Card>
  )
}