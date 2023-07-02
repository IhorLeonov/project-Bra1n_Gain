import { setModalTypeTask, toggleModal, setModalAction } from 'redux/modal/modalSlice';
import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';
import { useDispatch } from 'react-redux';

export const ColumnHeadBar = ({ title }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setModalTypeTask())
    dispatch(setModalAction("add"));
    dispatch(toggleModal());
  };

  return (
    <>
      <Wrap>
        <ColumnTitle>
          {title === 'to-do'
            ? 'To do'
            : title === 'in-progress'
            ? 'In progress'
            : title === 'done'
            ? 'Done'
            : null}
        </ColumnTitle>
        <BtnAddTop onClick={handleClick}>
          <Icon />
        </BtnAddTop>
      </Wrap>
    </>
  );
};
