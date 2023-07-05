import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './UserInfo.styled';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export const UserInfo = () => {
  const res = useAuth();
  const name = res.user.name;
  const nameWithoutSpase = name.split(' ')[0];
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
      <Link to={'/layout/account'}>
        <UserName>{nameWithoutSpase || 'Name'}</UserName>
      </Link>
      <UserPicture>{displayName}</UserPicture>
    </Wrapper>
  );
};
