import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import { updateUser } from 'redux/auth/operations';

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
  const dispatch = useDispatch();

  const [avatarUrl, setAvatarUrl] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const [newAvatar, setNewAvatar] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  // Вытягивает дату из бека в формате дд/ммм/гггг и преобразовывает сразу в формат для календаря


  useEffect(() => {
    const newDate = user?.birthday.split("/").reverse().join("-");
    if (user?.birthday !== "") {
      setStartDate(new Date(Date.parse(newDate)));
    }
  }, [user?.birthday]);

  // Функция для отображения превью аватарки перед отправкой формы

  function previewFiles(avatar) {
    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onloadend = () => {
      setNewAvatar(reader.result);
    }
  }


  // Создает FormData, наполняет ее полями формы, которые редактировались и отправляет на бэк

  const handleFormSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    console.log(avatarUrl);
    try {
      if (avatarUrl) {
        formData.append('avatarUrl', avatarUrl);
      }
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
      formData.append(
        'birthday',
        new Date(startDate).toLocaleDateString('en-GB')
      );

      // Значения formData
      // for (const value of formData.values()) {
      //   console.log(value);
      // }

      await dispatch(updateUser(formData));
      resetForm();

    } catch (e) {
      console.error(e);
    }
  };

  //поля формы при загрузке страницы
  const initialValues = {
    avatarURL: user?.avatarURL,
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    skype: user?.skype || '',
  };

  return (
    <Wrapper>
      <Formik
        dirty
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleSubmit, handleChange, handleBlur, dirty }) => (
          <div>
            <FormUserProfile autoComplete="off" onSubmit={handleSubmit}>
              <LabelAvatar htmlFor="avatarURL">
                <AvatarWrapper>

                  {newAvatar ?
                    (<Avatar src={newAvatar} alt="avatar" />)
                    :
                    (<Avatar src={user.avatarUrl} alt="avatar" />)
                  }
                  <BtnUploadAvatar
                    type="file"
                    name="avatarURL"
                    accept=".jpg, .jpeg, .png"
                    onChange={e => {
                      // blop для отправки на бєк
                      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
                      previewFiles(e.target.files[0]);
                    }}
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
                        showYearDropdown
                        dirty
                        type={'date'}
                        input={true}
                        selected={startDate}
                        onChange={date => {
                          setStartDate(date);
                          setNewBirthday(date.toLocaleDateString('en-GB'));
                          console.log(newBirthday);
                        }}
                        minDate={new Date('1923-01-01T00:00:00')}
                        maxDate={new Date()}
                        formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                        calendarStartDay={1}
                        placeholderText="Click to select a date"
                        dateFormat="dd/MM/yyyy"
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

    </Wrapper >
  );
};
