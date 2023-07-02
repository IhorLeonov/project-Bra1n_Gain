import { Formik, Field, Form } from 'formik';
import {
  CancelButton,
  StyledButton,
  ButtonContainer,
  EditButton,
  LabelRadio,
  Label,
  WrapperTime,
  Input,
  Radio,
  WrapperRadio,
  ContainerForm,
  RadioCustom,
  Icon,
  IconFiPlus
} from './TaskForm.styled';
import { FiPlus } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { getDate } from 'redux/currentDate/selector';

import { toggleModal } from 'redux/modal/modalSlice';
import { getModalTask, modalAction } from 'redux/modal/selector';
import { updateTask, addTask } from 'redux/task/operations';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  const task = useSelector(getModalTask);
  const type = useSelector(modalAction);

  const howRender = task && type === 'edit';

  const { title, start, end, priority } = task;

  const initialValues = {
    title: `${howRender ? title : ''}`,
    start: `${howRender ? start : ''}`,
    end: `${howRender ? end : ''}`,
    priority: `${howRender ? priority : 'low'}`,
  };

  const handleClick = () => {
    dispatch(toggleModal());
  };

  const handleSubmit = data => {
    if (type === 'edit') {
      const newTask = { ...task, ...data };
      dispatch(updateTask(newTask));
      dispatch(toggleModal());
    }

    if (type === 'add') {
      const newTask = { date: format(date, 'yyyy-MM-dd'), ...data };

      dispatch(addTask(newTask));
      dispatch(toggleModal());
    }
  };

  return (
    <ContainerForm>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Label htmlFor="title">
            Title
            <Input id="title" name="title" placeholder="Enter text" />
          </Label>
          <WrapperTime>
            <Label htmlFor="start">
              Start
              <Input id="start" name="start" placeholder="9:00" />
            </Label>
            <Label htmlFor="end">
              End
              <Input id="end" name="end" placeholder="11:59" />
            </Label>
          </WrapperTime>

          {/* <div id="priority-radio-group">Picked</div> */}
          <WrapperRadio role="group" aria-labelledby="priority-radio-group">
            <LabelRadio>
              <Radio type="radio" name="priority" value="low" />
              <RadioCustom value="low"/>
              Low
            </LabelRadio>
            <LabelRadio>
              <Radio type="radio" name="priority" value="medium" />
              <RadioCustom value="medium"/>
              Medium
            </LabelRadio>
            <LabelRadio>
              <Radio type="radio" name="priority" value="high" />
              <RadioCustom value="high"/>
              High
            </LabelRadio>
          </WrapperRadio>
          <ButtonContainer>
            {type === 'add' ? (
              <>
                <StyledButton type="submit"> 
                <IconFiPlus /> 
                Add
                </StyledButton>
                <CancelButton type="button" onClick={handleClick}>
                  Cancel
                </CancelButton>
              </>
            ) : (
              <EditButton type="submit">
              <Icon
          src={process.env.PUBLIC_URL + '/images/icons/icon-pencil-16x16-white.svg'}
          alt="button-edit"
        />
              Edit</EditButton>
            )}
          </ButtonContainer>
        </Form>
      </Formik>
    </ContainerForm>
  );
};
