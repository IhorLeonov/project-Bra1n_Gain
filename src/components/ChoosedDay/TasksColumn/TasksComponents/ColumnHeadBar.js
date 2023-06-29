import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
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
        <BtnAddTop>
          <Icon />
        </BtnAddTop>
      </Wrap>
    </>
  );
};
