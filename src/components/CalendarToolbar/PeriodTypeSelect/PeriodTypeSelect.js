import { ButtonDay, ButtonMonth } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ typenav, setTypeNav }) => {
  return (
    <div>
      <ButtonMonth onClick={() => setTypeNav('month')} typenav={typenav}>
        Month
      </ButtonMonth>
      <ButtonDay onClick={() => setTypeNav('day')} typenav={typenav}>
        Day
      </ButtonDay>
    </div>
  );
};
