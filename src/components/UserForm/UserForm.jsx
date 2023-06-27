import React, { useState } from 'react';
// import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import { updateUser } from 'redux/auth/operations';
// import { refreshUser } from 'redux/auth/operations';

import { selectUser } from 'redux/auth/selectors.js';

import {
  Wrapper,
  Avatar,
  AvatarWrapper,
  FormUserProfile,
  BtnUploadAvatar,
  LabelAvatar,
  Input,
  Label,
  SubmitBtn,
  UserLabel,
  UserName,
  DatePickerStyles,
  DatePickerWrapper,
  MainFieldWrapper,
  BlockFieldWrapper,
} from './UserForm.styled';

export const UserForm = () => {
  const user = useSelector(selectUser);
  console.log('user', user);
  const dispatch = useDispatch();

  //   const [avatarUrl, setAvatarUrl] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const [startDate, setStartDate] = useState(null);

  const handleFormSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    console.log(values);
    try {
      // Добавить проверку на изменение  и если поле не изменилось, не сетить
      if (initialValues.name !== values.name && values.name) {
        formData.append('name', values.name);
      }
      if (initialValues.email !== values.email && values.email) {
        formData.append('email', values.email);
      }
      if (initialValues.phone !== values.phone) {
        formData.append('phone', values.phone);
      }
      if (initialValues.skype !== values.skype) {
        formData.append('skype', values.skype);
      }
      if (values.birthday) {
        formData.append(
          'birthday',
          new Date(values.birthday).toLocaleDateString('en-GB')
        );
      }
      for (const value of formData.values()) {
        console.log(value);
      }
      await dispatch(updateUser(formData));
      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  const initialValues = {
    avatarURL: user?.avatarURL,
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    skype: user?.skype || '',
    birthday:
      newBirthday || user?.birthday ? user?.birthday || newBirthday : '',
    // new Date().toLocaleDateString('en-GB'),
  };
  console.log(initialValues);
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleSubmit, handleChange, handleBlur, dirty }) => (
          <div>
            <FormUserProfile autoComplete="off" onSubmit={handleSubmit}>
              <LabelAvatar htmlFor="avatarURL">
                <AvatarWrapper>
                  <Avatar src={user.avatarUrl} alt="avatar" />
                  <BtnUploadAvatar
                    type="file"
                    name="avatarURL"
                    accept=".jpg, .jpeg, .png"
                  />
                </AvatarWrapper>
              </LabelAvatar>
              <UserName>
                {values.name ? values.name : initialValues.name}
              </UserName>
              <UserLabel>User</UserLabel>

              <MainFieldWrapper>
                <BlockFieldWrapper>
                  <Label htmlFor="name">
                    User Name
                    <Input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                    />
                  </Label>
                  <DatePickerWrapper>
                    <Label htmlFor="birthday">
                      Birthday
                      <DatePickerStyles
                        // showYearDropdown
                        dirty
                        type={'date'}
                        input={true}
                        selected={startDate}
                        onChange={date => {
                          setStartDate(date);
                          setNewBirthday(date);
                        }}
                        minDate={new Date('1923-01-01T00:00:00')}
                        maxDate={new Date()}
                        formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                        calendarStartDay={1}
                        placeholderText="Click to select a date"
                        // value={values.birthday}
                      />
                    </Label>
                  </DatePickerWrapper>
                  <Label htmlFor="email">
                    Email
                    <Input type="email" name="email" />
                  </Label>
                </BlockFieldWrapper>
                <BlockFieldWrapper>
                  <Label htmlFor="phone">
                    Phone
                    <Input type="text" name="phone" />
                  </Label>

                  <Label htmlFor="skype">
                    Skype
                    <Input
                      type="text"
                      name="skype"
                      value={values.skype ? values.skype : ''}
                      placeholder="Add a skype number"
                    />
                  </Label>
                </BlockFieldWrapper>
              </MainFieldWrapper>

              <SubmitBtn type="submit" disabled={!dirty}>
                Save changes
              </SubmitBtn>
            </FormUserProfile>
          </div>
        )}
      </Formik>
    </Wrapper>
  );
};
