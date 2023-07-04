import { ScrollToTop } from '../MainPageComponents/ScrollToTop/ScrollToTop';

import {
  Container,
  SectionList,
  InfoWrapper,
  SectionDescription,
  ContainerDescription,
  Img,
  Label,
  Number,
  Text,
  TitleText,
  TitleWrapper,
} from './HomePageDescription.styled';

export const HomePageDescription = () => {
  return (
    <Container>
      <SectionList>
        <SectionDescription>
          <ContainerDescription>
            <InfoWrapper>
              <TitleWrapper>
                <Number>1.</Number>
                <Label>Calendar</Label>
                <TitleText>View</TitleText>
              </TitleWrapper>
              <Text>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </Text>
            </InfoWrapper>
          </ContainerDescription>
          <ContainerDescription>
            <div>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x2.webp'} 2x`}
                  media="(max-width: 767px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x2.webp'} 2x`}
                  media="(max-width: 1279px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x2.webp'} 2x`}
                  media="(min-width: 1280px)"
                ></source>
                <Img src={process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x1.png'} alt="schedule"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
        <SectionDescription>
          <ContainerDescription>
            <InfoWrapper>
              <TitleWrapper>
                <Number>2.</Number>
                <TitleText>Sidebar</TitleText>
              </TitleWrapper>
              <Text>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </Text>
            </InfoWrapper>
          </ContainerDescription>
          <ContainerDescription>
            <div>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x2.webp'} 2x`}
                  media="(max-width: 767px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x2.webp'} 2x`}
                  media="(max-width: 1279px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x2.webp'} 2x`}
                  media="(min-width: 1280px)"
                ></source>
                <Img src={process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x1.png'} alt="sidebar"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
        <SectionDescription>
          <ContainerDescription>
            <InfoWrapper>
              <TitleWrapper>
                <Number>3.</Number>
                <Label>All in</Label>
                <TitleText>One</TitleText>
              </TitleWrapper>
              <Text>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </Text>
            </InfoWrapper>
          </ContainerDescription>
          <ContainerDescription>
            <div>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x2.webp'} 2x`}
                  media="(max-width: 767px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x2.webp'} 2x`}
                  media="(max-width: 1279px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x2.webp'} 2x`}
                  media="(min-width: 1280px)"
                ></source>
                <Img src={process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x1.png'} alt="Calendar"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
      </SectionList>
      <ScrollToTop />
    </Container>
  );
};
