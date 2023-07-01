import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './UserInfo.styled';
import { useAuth } from 'hooks/useAuth';

export const UserInfo = () => {
  const res = useAuth();
  const name = res.user.name;
  const avatarURL = res.user.avatarUrl;

  const displayName = avatarURL ? (
    <img src={`${avatarURL}`} alt="UserPicture" />
  ) : (
    <BackgroundName className="initials">
      <UserNameIcon>{name}</UserNameIcon>
    </BackgroundName>
  );
  return (
    <Wrapper>
      <UserName>{name || 'Name'}</UserName>
      <UserPicture>{displayName}</UserPicture>
    </Wrapper>
  );
};
