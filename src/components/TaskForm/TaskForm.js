import { Formik, Form, ErrorMessage } from 'formik';
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
  IconFiPlus,
  ErrorText,
} from './TaskForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { getDate } from 'redux/currentDate/selector';

import { toggleModal } from 'redux/modal/modalSlice';
import { getModalTask, modalAction, getCategory } from 'redux/modal/selector';
import { updateTask, addTask } from 'redux/task/operations';

const timeRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;

export const TaskForm = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  const task = useSelector(getModalTask);
  const category = useSelector(getCategory);
  const type = useSelector(modalAction);

  const howRender = task && type === 'edit';

  const { title, start, end, priority } = task;

  const initialValues = {
    title: `${howRender ? title : ''}`,
    start: `${howRender ? start : '09:00'}`,
    end: `${howRender ? end : '14:00'}`,
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
      const newTask = { date: format(date, 'yyyy-MM-dd'), ...data, category };

      dispatch(addTask(newTask));
      dispatch(toggleModal());
    }
  };

  const validateForm = values => {
    const errors = {};

    if (!values.title.trim()) {
      errors.start = 'Title is Required';
      return errors;
    }

    if (!values.start) {
      errors.start = 'Required';
      return errors;
    } else if (!timeRegex.test(values.start)) {
      errors.start = 'Invalid time "Start", write format time "hh:mm"';
      return errors;
    }

    if (!values.end) {
      errors.end = 'Required';
      return errors;
    } else if (!timeRegex.test(values.end)) {
      errors.end = 'Invalid time "End", write format time "hh:mm"';
      return errors;
    }
  };

  return (
    <ContainerForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form>
          <Label htmlFor="title">
            Title
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Enter text"
            />
          </Label>

          <WrapperTime>
            <Label htmlFor="start">
              Start
              <Input id="start" name="start" type="text" placeholder="09:00" />
            </Label>
            <Label htmlFor="end">
              End
              <Input id="end" name="end" type="text" placeholder="11:59" />
            </Label>
          </WrapperTime>

          <WrapperRadio role="group" aria-labelledby="priority-radio-group">
            <LabelRadio>
              <Radio type="radio" name="priority" value="low" />
              <RadioCustom value="low" />
              Low
            </LabelRadio>
            <LabelRadio>
              <Radio type="radio" name="priority" value="medium" />
              <RadioCustom value="medium" />
              Medium
            </LabelRadio>
            <LabelRadio>
              <Radio type="radio" name="priority" value="high" />
              <RadioCustom value="high" />
              High
            </LabelRadio>
          </WrapperRadio>
          <ErrorMessage name="title" component={ErrorText} />
          <ErrorMessage name="start" component={ErrorText} />
          <ErrorMessage name="end" component={ErrorText} />
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
                  src={
                    process.env.PUBLIC_URL +
                    '/images/icons/icon-pencil-16x16-white.svg'
                  }
                  alt="button-edit"
                />
                Edit
              </EditButton>
            )}
          </ButtonContainer>
        </Form>
      </Formik>
    </ContainerForm>
  );
};
