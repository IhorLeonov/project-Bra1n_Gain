import { SectionToolbar, TaskAction, Icon } from './Toolbar.styled';

export const Toolbar = ({setTargetElement, setTaskModalOpen}) => {

const handleClick = ( e ) => {
  setTaskModalOpen(true);
  setTargetElement(e.target);
}
    
    return (
      <SectionToolbar >
        <TaskAction onClick={handleClick}>
          <Icon
            src={process.env.PUBLIC_URL + '/images/icons/icon-arrow-circle-broken-right-16x16.svg'}
            alt="button-move"
          />
        </TaskAction>
        <TaskAction>
          <Icon
            src={process.env.PUBLIC_URL + '/images/icons/icon-pencil-16x16.svg'}
            alt="button-edit"
          />
        </TaskAction>
        <TaskAction>
          <Icon
            src={process.env.PUBLIC_URL + '/images/icons/icon-trash-16x16.svg'}
            alt="button-delete"
          />
        </TaskAction>
      </SectionToolbar>
    );
  };