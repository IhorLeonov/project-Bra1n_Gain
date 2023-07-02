import { Formik, Field, Form } from 'formik';
import {
  CancelButton,
  StyledButton,
  ButtonContainer,
} from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';

export const TaskForm = () => {
  const dispatch = useDispatch()

    const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          start: '',
          end: '',
          priority: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Enter text" />

          <label htmlFor="start">Start</label>
          <Field id="start" name="start" placeholder="Enter text" />

          <label htmlFor="end">End</label>
          <Field id="end" name="end" placeholder="Enter text" />

          <div id="priority-radio-group">Picked</div>
          <div role="group" aria-labelledby="priority-radio-group">
            <label>
              <Field type="radio" name="priority" value="Low" />
              Low
            </label>
            <label>
              <Field type="radio" name="priority" value="Medium" />
              Medium
            </label>
            <label>
              <Field type="radio" name="priority" value="High" />
              High
            </label>
          </div>
          <ButtonContainer>
            <StyledButton type="submit">Submit</StyledButton>
            <CancelButton type="button" onClick={handleClick}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        </Form>
      </Formik>
    </div>
  );
};
