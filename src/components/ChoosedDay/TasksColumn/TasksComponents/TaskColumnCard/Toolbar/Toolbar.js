import { SectionToolbar, TaskAction } from './Toolbar.styled';

export const Toolbar = () => {
    
    return (
      <SectionToolbar>
        <TaskAction>
          <img
            src={process.env.PUBLIC_URL + '/images/icons/icon-arrow-circle-broken-right-16x16.svg'}
            alt="button-move"
          />
        </TaskAction>
        <TaskAction>
          <img
            src={process.env.PUBLIC_URL + '/images/icons/icon-pencil-16x16.svg'}
            alt="button-edit"
          />
        </TaskAction>
        <TaskAction>
          <img
            src={process.env.PUBLIC_URL + '/images/icons/icon-trash-16x16.svg'}
            alt="button-delete"
          />
        </TaskAction>
      </SectionToolbar>
    );
  };