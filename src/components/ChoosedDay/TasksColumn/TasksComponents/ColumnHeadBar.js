import { toggleModal } from 'redux/modal/modalSlice';
import { useSelector } from "react-redux";
import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';
import { selectShowModal } from "redux/modal/selector";

export const ColumnHeadBar = ({ title }) => { 
  const isModalOpen = useSelector(selectShowModal);

  const handleClick = () => {
    toggleModal();
    console.log('button pressed');
    console.log(isModalOpen)
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
