import { useParams } from 'react-router-dom';
import { NavWrraper, ButtonDay, ButtonMonth } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({date}) => {
  const { dayNum } = useParams()

  const params = dayNum ? dayNum : date.getDate();

  return (
    <NavWrraper>
      <ButtonMonth to={`month/${params}`}>
        Month
      </ButtonMonth>
      <ButtonDay to={`day/${params}`}>
        Day
      </ButtonDay>
    </NavWrraper>
  );
};
