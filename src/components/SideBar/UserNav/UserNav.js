import {
  Heading,
  UserNavContainer,
  StyledNavLink,
  Icon,
  IconStatistic,
} from './UserNav.styled';

export const UserNav = () => {
  return (
    <>
      <Heading>User Panel</Heading>
      <UserNavContainer>
        <StyledNavLink to="account" id={'account'}>
          <Icon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite.svg#icon-user-check-24x24'
              }
              stroke="currentColor"
            />
          </Icon>
          My Account
        </StyledNavLink>

        <StyledNavLink to="calendar" id={'calendar'}>
          <Icon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite.svg#icon-calendar'
              }
              fill="currentColor"
            />
          </Icon>
          Calendar
        </StyledNavLink>

        <StyledNavLink to="statistics" id={'statistics'}>
          <IconStatistic>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite.svg#statistic'
              }
              fill="currentColor"
            />
          </IconStatistic>
          Statistics
        </StyledNavLink>
      </UserNavContainer>
    </>
  );
};
