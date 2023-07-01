import { Modal } from 'components/Modal/Modal';
import { Formik, Field, Form } from 'formik';

import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';

export const TaskModal = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <Modal>
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

            <button type="submit">Submit</button>
            <button type="button" onClick={handleClick}>
              Cancel
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};
