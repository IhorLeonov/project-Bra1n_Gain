import { nanoid } from 'nanoid';
import {
  CellWrapper,
  CellWrapperOfDate,
  GridWrapper,
  TodayDay,
} from './DayCalendarHead.styled';
import { startOfWeek, endOfWeek, format, addDays, isSameDay } from 'date-fns';
import { useMedia } from 'react-use';

export const DayCalendarHead = ({ date }) => {
  const isMobile = useMedia('(max-width: 767px)');
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const end = endOfWeek(date, { weekStartsOn: 1 });
  const week = [];
  let currentDay = start;
  while (currentDay <= end) {
    week.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return (
    <GridWrapper>
      {isMobile ? (
        <>
          <CellWrapper>m</CellWrapper>
          <CellWrapper>t</CellWrapper>
          <CellWrapper>w</CellWrapper>
          <CellWrapper>t</CellWrapper>
          <CellWrapper>f</CellWrapper>
          <CellWrapper>s</CellWrapper>
          <CellWrapper>s</CellWrapper>
        </>
      ) : (
        <>
          <CellWrapper>mon</CellWrapper>
          <CellWrapper>tue</CellWrapper>
          <CellWrapper>wed</CellWrapper>
          <CellWrapper>thu</CellWrapper>
          <CellWrapper>fri</CellWrapper>
          <CellWrapper>sat</CellWrapper>
          <CellWrapper>sun</CellWrapper>
        </>
      )}
      {week.map(dateItem => {
        const isCurrentDay = isSameDay(dateItem, date);
        return (
          <CellWrapperOfDate key={nanoid()}>
            {!isCurrentDay && format(dateItem, 'd')}
            {isCurrentDay && <TodayDay>{format(dateItem, 'd')}</TodayDay>}
          </CellWrapperOfDate>
        );
      })}
    </GridWrapper>
  );
};
