import { toggleModal } from 'redux/modal/modalSlice';
import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';
import { useDispatch } from 'react-redux';

export const ColumnHeadBar = ({ title }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <Wrap>
        <ColumnTitle>
          {title === 'toDo'
            ? 'To do'
            : title === 'inProgress'
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
