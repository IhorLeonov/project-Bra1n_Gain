import m1 from 'shared/images/calendar-mobile/calendar-mobile.png';
import m1Retina from 'shared/images/calendar-mobile/calendar-mobile@2x.png';
import m2 from 'shared/images/navigation-mobile/navigation-mobile.png';
import m2Retina from 'shared/images/navigation-mobile/navigation-mobile@2x.png';
import m3 from 'shared/images/todo_board-mobile/todo_board-mobile.png';
import m3Retina from 'shared/images/todo_board-mobile/todo_board-mobile@2x.png';

import t1 from 'shared/images/calendar-tablet/calendar-tablet.png';
import t1Retina from 'shared/images/calendar-tablet/calendar-tablet@2x.png';
import t2 from 'shared/images/navigation-tablet/navigation-tablet.png';
import t2Retina from 'shared/images/navigation-tablet/navigation-tablet@2x.png';
import t3 from 'shared/images/todo_board-tablet/todo_board-tablet.png';
import t3Retina from 'shared/images/todo_board-tablet/todo_board-tablet@2x.png';

import d1 from 'shared/images/calendar-desctop/calendar-desctop.png';
import d1Retina from 'shared/images/calendar-desctop/calendar-desctop@2x.png';
import d2 from 'shared/images/navigation-desctop/navigation-desctop.png';
import d2Retina from 'shared/images/navigation-desctop/navigation-desctop@2x.png';
import d3 from 'shared/images/todo_board-desctop/todo_board-desctop.png';
import d3Retina from 'shared/images/todo_board-desctop/todo_board-desctop@2x.png';

import { ReviewSlider } from '../ReviewSlider/ReviewSlider';

import {
  InfoWrapper,
  SectionDescription,
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
      <ul>
        <SectionDescription>
          <InfoWrapper>
            <TitleWrapper>
              <Number>1.</Number>
              <Label>Calendar</Label>
              <TitleText>View</TitleText>
            </TitleWrapper>
            <Text>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </Text>
          </InfoWrapper>
          <div>
            <picture>
              <source
                srcSet={`${m1} 1x, ${m1Retina} 2x`}
                media="(max-width: 764px)"
              ></source>
              <source
                srcSet={`${t1} 1x, ${t1Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d1} 1x, ${d1Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <Img src={d1} alt="schedule"></Img>
            </picture>
          </div>
        </SectionDescription>
        <SectionDescription>
          <InfoWrapper>
            <TitleWrapper>
              <Number>2.</Number>
              <TitleText>Sidebar</TitleText>
            </TitleWrapper>
            <Text>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </Text>
          </InfoWrapper>
          <div>
            <picture>
              <source
                srcSet={`${m2} 1x, ${m2Retina} 2x`}
                media="(max-width: 764px)"
              ></source>
              <source
                srcSet={`${t2} 1x, ${t2Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d2} 1x, ${d2Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <Img src={d2} alt="sidebar"></Img>
            </picture>
          </div>
        </SectionDescription>
        <SectionDescription>
          <InfoWrapper>
            <TitleWrapper>
              <Number>3.</Number>
              <Label>All in</Label>
              <TitleText>One</TitleText>
            </TitleWrapper>
            <Text>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </Text>
          </InfoWrapper>
          <div>
            <picture>
              <source
                srcSet={`${m3} 1x, ${m3Retina} 2x`}
                media="(max-width: 764px)"
              ></source>
              <source
                srcSet={`${t3} 1x, ${t3Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d3} 1x, ${d3Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <Img src={d3} alt="Calendar"></Img>
            </picture>
          </div>
        </SectionDescription>
      </ul>
      <ReviewSlider />
    </section>
  );
};
