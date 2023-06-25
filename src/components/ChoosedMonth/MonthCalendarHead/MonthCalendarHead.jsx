import {
  CellWrapper,
  CellWrapperWeekend,
  GridWrapper,
} from './MonthCalendarHead.styled';
import { useMedia } from 'react-use';

export const MonthCalendarHead = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <GridWrapper>
      {isMobile ? (
        <>
          <CellWrapper>m</CellWrapper>
          <CellWrapper>t</CellWrapper>
          <CellWrapper>w</CellWrapper>
          <CellWrapper>t</CellWrapper>
          <CellWrapper>f</CellWrapper>
          <CellWrapper>
            <CellWrapperWeekend>s</CellWrapperWeekend>
          </CellWrapper>
          <CellWrapper>
            <CellWrapperWeekend>s</CellWrapperWeekend>
          </CellWrapper>
        </>
      ) : (
        <>
          <CellWrapper>mon</CellWrapper>
          <CellWrapper>tue</CellWrapper>
          <CellWrapper>wed</CellWrapper>
          <CellWrapper>thu</CellWrapper>
          <CellWrapper>fri</CellWrapper>
          <CellWrapper>
            <CellWrapperWeekend>sat</CellWrapperWeekend>
          </CellWrapper>
          <CellWrapper>
            <CellWrapperWeekend>sun</CellWrapperWeekend>
          </CellWrapper>
        </>
      )}
    </GridWrapper>
  );
};
