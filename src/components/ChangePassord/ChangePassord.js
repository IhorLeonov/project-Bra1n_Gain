import React, { useState } from 'react';
// import React, { useEffect } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';

// import { Form, Field } from 'formik';
// import { updateUser } from 'redux/auth/operations';
// import { selectUser } from 'redux/auth/selectors.js';
// import * as yup from 'yup';

import {
  FormStyle,
  InputWrapper,
  BtnToggleVisiblePassord,
  VisionIcons,
} from './ChangePassord.styled.jsx';
import {
  Input,
  SubmitBtn,
  Wrapper,
  Label,
} from '../UserForm/UserForm.styled.jsx';

export const ChangePassord = () => {
  const [type, setType] = useState('password');
  //   const [oldPassword, setOldPassword] = useState('');
  //   const [newPassword, setNewPassword] = useState('');
  //   const [confirmPassword, setConfirmPassword] = useState('');

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  function togglePassInput() {
    if (type === 'password') {
      setType('text');
    }
    if (type === 'text') {
      setType('password');
    }
  }
  return (
    <Wrapper>
      <Formik
        dirty
        initialValues={initialValues}
        // validationSchema={schema}
        enableReinitialize={true}
        // onSubmit={handleFormSubmit}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <div>
            <FormStyle autoComplete="off" onSubmit={handleSubmit}>
              <InputWrapper>
                <Label htmlFor="oldPassword">
                  Old password
                  <Input
                    type={type}
                    name="oldPassword"
                    value={values.oldPasswordPassword}
                    placeholder="Enter old password"
                    onChange={handleChange}
                  />
                  <BtnToggleVisiblePassord
                    type="button"
                    onClick={togglePassInput}
                  >
                    <VisionIcons type={type} />
                  </BtnToggleVisiblePassord>
                </Label>
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="newPassword">
                  New password
                  <Input
                    type={type}
                    name="newPassword"
                    value={values.newPassword}
                    placeholder="Enter new password"
                    onChange={handleChange}
                  />
                  <BtnToggleVisiblePassord
                    type="button"
                    onClick={togglePassInput}
                  >
                    <VisionIcons type={type} />
                  </BtnToggleVisiblePassord>
                </Label>
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="confirmPassword">
                  Confirm password
                  <Input
                    type={type}
                    name="confirmPassword"
                    value={values.confirmPasswordPassword}
                    placeholder="Confirm new password"
                    onChange={handleChange}
                  />
                  <BtnToggleVisiblePassord
                    type="button"
                    onClick={togglePassInput}
                  >
                    <VisionIcons type={type} />
                  </BtnToggleVisiblePassord>
                </Label>
              </InputWrapper>

              <SubmitBtn
                type="submit"
                disabled={
                  !values.oldPassword ||
                  !values.newPassword ||
                  !values.confirmPassword
                }
              >
                {' '}
                Save changes{' '}
              </SubmitBtn>
            </FormStyle>
          </div>
        )}
      </Formik>
    </Wrapper>
  );
};
