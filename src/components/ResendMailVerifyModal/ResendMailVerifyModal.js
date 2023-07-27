import { Modal } from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import * as yup from 'yup';
import {
  EmailInput,
  EmailNameOfInput,
  FormikWrapper,
  ResendSubmit,
  ResendVerifyForm,
} from './ResendMailVerifyModal.styled';
import { resendVerifyMail } from 'redux/auth/operations';

const emailSchema = yup.object().shape({
  email: yup.string().email('Incorrect email!').required('Email is required'),
});

const initialValues = {
  email: '',
};

export const ResendMailVerifyModal = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email }) => {
    const answer = await dispatch(resendVerifyMail(email));

    if (answer.error) {
      return;
    }

    dispatch(toggleModal());
  };

  return (
    <Modal>
      <FormikWrapper
        initialValues={initialValues}
        validationSchema={emailSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <ResendVerifyForm>
            <div>
              <EmailNameOfInput>Email</EmailNameOfInput>
              <EmailInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            {dirty && (
              <ResendSubmit type="submit" disabled={!isValid}>
                Submit
              </ResendSubmit>
            )}
          </ResendVerifyForm>
        )}
      </FormikWrapper>
    </Modal>
  );
};
