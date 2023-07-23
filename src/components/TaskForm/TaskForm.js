import { Formik, Form, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
  LabelTime,
  TimePickerWrapper,
  TimePickerCastom,
} from './TaskForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useDate } from 'hooks/useDate';

import { toggleModal } from 'redux/modal/modalSlice';
import { getModalTask, modalAction, getCategory } from 'redux/modal/selector';
import { updateTask, addTask } from 'redux/task/operations';
import { setTimePicker } from 'utils/setTimePicker';
import { hoursСomparison } from 'utils/hoursСomparison';

export const TaskForm = () => {
  const { t } = useTranslation();
  const [date] = useDate();
  const dispatch = useDispatch();
  const task = useSelector(getModalTask);
  const category = useSelector(getCategory);
  const type = useSelector(modalAction);
  const howRender = task && type === 'edit';
  const { title, start, end, priority } = task;

  const [startTime, setStartTime] = useState(
    setTimePicker(date, start, 'start')
  );
  const [endTime, setEndTime] = useState(setTimePicker(date, end, 'end'));

  const initialValues = {
    title: `${howRender ? title : ''}`,
    priority: `${howRender ? priority : 'low'}`,
    start: `${startTime}`,
  };

  const handleClick = () => {
    dispatch(toggleModal());
  };

  const handleSubmit = data => {
    const newDate = {
      ...data,
      start: format(startTime, 'HH:mm'),
      end: format(endTime, 'HH:mm'),
    };

    if (type === 'edit') {
      const newTask = { ...task, ...newDate };
      dispatch(updateTask(newTask));
      dispatch(toggleModal());
    }

    if (type === 'add') {
      const newTask = {
        date: format(date, 'yyyy-MM-dd'),
        ...newDate,
        category,
      };

      dispatch(addTask(newTask));
      dispatch(toggleModal());
    }
  };

  const validateForm = values => {
    const comparisonTime = hoursСomparison(startTime, endTime);
    const errors = {};

    if (!values.title.trim()) {
      errors.start = 'Title is Required';
      return errors;
    }

    if (!comparisonTime.status) {
      errors.start = comparisonTime.message;
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
            {t('calendar.modal.Title')}
            <Input
              id="title"
              name="title"
              type="text"
              placeholder={t('calendar.modal.EnterText')}
            />
          </Label>

          <WrapperTime>
            <TimePickerWrapper>
              <LabelTime>{t('calendar.modal.Start')}</LabelTime>
              <TimePickerCastom
                selected={startTime}
                onChange={data => setStartTime(setTimePicker(date, data))}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="HH:mm"
              />
            </TimePickerWrapper>
            <TimePickerWrapper>
              <LabelTime>{t('calendar.modal.End')}</LabelTime>
              <TimePickerCastom
                selected={endTime}
                onChange={data => setEndTime(setTimePicker(date, data))}
                timeFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="HH:mm"
              />
            </TimePickerWrapper>
          </WrapperTime>

          <WrapperRadio role="group" aria-labelledby="priority-radio-group">
            <LabelRadio>
              <Radio type="radio" name="priority" value="low" />
              <RadioCustom value="low" />
              {t('calendar.modal.Low')}
            </LabelRadio>
            <LabelRadio>
              <Radio type="radio" name="priority" value="medium" />
              <RadioCustom value="medium" />
              {t('calendar.modal.Medium')}
            </LabelRadio>
            <LabelRadio>
              <Radio type="radio" name="priority" value="high" />
              <RadioCustom value="high" />
              {t('calendar.modal.High')}
            </LabelRadio>
          </WrapperRadio>
          <ErrorMessage name="title" component={ErrorText} />
          <ErrorMessage name="start" component={ErrorText} />
          <ButtonContainer>
            {type === 'add' ? (
              <>
                <StyledButton type="submit">
                  <IconFiPlus />
                  {t('calendar.modal.Add')}
                </StyledButton>
                <CancelButton type="button" onClick={handleClick}>
                  {t('calendar.modal.Cancel')}
                </CancelButton>
              </>
            ) : (
              <EditButton type="submit">
                <Icon>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite.svg#icon-pencil-16x16-white'
                    }
                  />
                </Icon>
                {t('calendar.modal.Edit')}
              </EditButton>
            )}
          </ButtonContainer>
        </Form>
      </Formik>
    </ContainerForm>
  );
};
