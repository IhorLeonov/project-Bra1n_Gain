import { toggleModal } from 'redux/modal/modalSlice';
import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowModal } from 'redux/modal/selector';

export const ColumnHeadBar = ({ title }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectShowModal);

  const handleClick = () => {
    dispatch(toggleModal());
    console.log(isModalOpen);
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
