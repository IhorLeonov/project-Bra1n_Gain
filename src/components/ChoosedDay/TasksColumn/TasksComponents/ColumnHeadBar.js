import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title, handleAddTask }) => {

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
        <BtnAddTop onClick={handleAddTask}>
          <Icon />
        </BtnAddTop>
      </Wrap>
    </>
  );
};
