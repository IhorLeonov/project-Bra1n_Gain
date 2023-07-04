import m1 from 'shared/images/calendar-mobile/calendar_m_x1.png';
import m1Retina from 'shared/images/calendar-mobile/calendar_m_x2.png';
import m1webp from 'shared/images/calendar-mobile/calendar_m_x1.webp';
import m1webp2x from 'shared/images/calendar-mobile/calendar_m_x2.webp';
import m2 from 'shared/images/navigation-mobile/navigation_m_x1.png';
import m2Retina from 'shared/images/navigation-mobile/navigation_m_x2.png';
import m2webp from 'shared/images/navigation-mobile/navigation_m_x1.webp';
import m2webp2x from 'shared/images/navigation-mobile/navigation_m_x2.webp';
import m3 from 'shared/images/todo_board-mobile/todo_board_m_x1.png';
import m3Retina from 'shared/images/todo_board-mobile/todo_board_m_x2.png';
import m3webp from 'shared/images/todo_board-mobile/todo_board_m_x1.webp';
import m3webp2x from 'shared/images/todo_board-mobile/todo_board_m_x2.webp';

import t1 from 'shared/images/calendar-tablet/calendar_t_x1.png';
import t1Retina from 'shared/images/calendar-tablet/calendar_t_x2.png';
import t1webp from 'shared/images/calendar-tablet/calendar_t_x1.webp';
import t1webp2x from 'shared/images/calendar-tablet/calendar_t_x2.webp';
import t2 from 'shared/images/navigation-tablet/navigation_t_x1.png';
import t2Retina from 'shared/images/navigation-tablet/navigation_t_x2.png';
import t2webp from 'shared/images/navigation-tablet/navigation_t_x1.webp';
import t2webp2x from 'shared/images/navigation-tablet/navigation_t_x2.webp';
import t3 from 'shared/images/todo_board-tablet/todo_board_t_x1.png';
import t3Retina from 'shared/images/todo_board-tablet/todo_board_t_x2.png';
import t3webp from 'shared/images/todo_board-tablet/todo_board_t_x1.webp';
import t3webp2x from 'shared/images/todo_board-tablet/todo_board_t_x2.webp';

import d1 from 'shared/images/calendar-desctop/calendar_d_x1.png';
import d1Retina from 'shared/images/calendar-desctop/calendar_d_x2.png';
import d1webp from 'shared/images/calendar-desctop/calendar_d_x1.webp';
import d1webp2x from 'shared/images/calendar-desctop/calendar_d_x2.webp';
import d2 from 'shared/images/navigation-desctop/navigation_d_x1.png';
import d2Retina from 'shared/images/navigation-desctop/navigation_d_x2.png';
import d2webp from 'shared/images/navigation-desctop/navigation_d_x1.webp';
import d2webp2x from 'shared/images/navigation-desctop/navigation_d_x2.webp';
import d3 from 'shared/images/todo_board-desctop/todo_board_d_x1.png';
import d3Retina from 'shared/images/todo_board-desctop/todo_board_d_x2.png';
import d3webp from 'shared/images/todo_board-desctop/todo_board_d_x1.webp';
import d3webp2x from 'shared/images/todo_board-desctop/todo_board_d_x2.webp';
import { ScrollToTop } from '../MainPageComponents/ScrollToTop/ScrollToTop';

import {
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
    <section>
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
                  srcSet={`${m1} 1x, ${m1Retina} 2x, ${m1webp} 1x, ${m1webp2x} 2x`}
                  media="(max-width: 764px)"
                ></source>
                <source
                  srcSet={`${t1} 1x, ${t1Retina} 2x, ${t1webp} 1x, ${t1webp2x} 2x`}
                  media="(max-width: 1439px)"
                ></source>
                <source
                  srcSet={`${d1} 1x, ${d1Retina} 2x, ${d1webp} 1x, ${d1webp2x} 2x`}
                  media="(min-width: 1440px)"
                ></source>
                <Img src={d1} alt="schedule"></Img>
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
                  srcSet={`${m2} 1x, ${m2Retina} 2x, ${m2webp} 1x, ${m2webp2x} 2x`}
                  media="(max-width: 764px)"
                ></source>
                <source
                  srcSet={`${t2} 1x, ${t2Retina} 2x, ${t2webp} 1x, ${t2webp2x} 2x`}
                  media="(max-width: 1439px)"
                ></source>
                <source
                  srcSet={`${d2} 1x, ${d2Retina} 2x, ${d2webp} 1x, ${d2webp2x} 2x`}
                  media="(min-width: 1440px)"
                ></source>
                <Img src={d2} alt="sidebar"></Img>
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
                  srcSet={`${m3} 1x, ${m3Retina} 2x, ${m3webp} 1x, ${m3webp2x} 2x`}
                  media="(max-width: 764px)"
                ></source>
                <source
                  srcSet={`${t3} 1x, ${t3Retina} 2x, ${t3webp} 1x, ${t3webp2x} 2x`}
                  media="(max-width: 1439px)"
                ></source>
                <source
                  srcSet={`${d3} 1x, ${d3Retina} 2x, ${d3webp} 1x, ${d3webp2x} 2x`}
                  media="(min-width: 1440px)"
                ></source>
                <Img src={d3} alt="Calendar"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
      </SectionList>
      <ScrollToTop />
    </section>
  );
};
