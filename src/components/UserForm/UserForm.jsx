import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import { updateUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors.js';
import * as yup from 'yup';
// import gоoseInRocket from '../../shared/images/rocket_auth-desctop/rocket_auth-desctop@2x.png';


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
  const [isUpdateForm, setIsUpdateForm] = useState(false);


  // Вытягивает дату из бека в формате дд/ммм/гггг и преобразовывает сразу в формат для календаря


  useEffect(() => {

    if (!user?.birthday) {
      return
    }
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

  // Делает активной кнопку submit при изменении аватарки или даты рождения
  useEffect(() => {
    if (newAvatar) {
      setIsUpdateForm(true);
    };
    if (newBirthday && user?.birthday !== newBirthday) {
      setIsUpdateForm(true);
    }
    if (user?.birthday === newBirthday && !newAvatar) {
      setIsUpdateForm(false);
    }
  }, [newAvatar, newBirthday, user?.birthday]);


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
      setIsUpdateForm(false);
      resetForm();

    } catch (e) {
      console.error(e);
    }
  };

  //схема вадилации

  const schema = yup.object().shape({
    name: yup.string().max(16, 'Name must be at most 16 characters').trim().required('Please enter the Name'),
    email: yup.string().email("This is an ERROR email").required('Email is required'),
    phone: yup.string().matches(/^\+?3?8?(0\d{9})$/, 'Phone number is not valid').max(13, 'Phone must be in the format +380000000000').min(13, 'Phone must be in the format +380000000000'),
    skype: yup.string().max(16, 'Skype must be at most 16 characters').min(3).matches(/^\S*$/, 'Skype must be without a space'),
  });

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
        validationSchema={schema}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleSubmit, handleChange, handleBlur, dirty, errors, touched }) => (
          <div>
            <FormUserProfile autoComplete="off" onSubmit={handleSubmit}
            >
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
                      setAvatarUrl(e.target.files[0]);
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
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>)
                      :
                      (!errors.name && touched.name ? <div>This is an CORRECT Name</div> : "")}
                  </Label>
                  <DatePickerWrapper>
                    <Label htmlFor="birthday">
                      Birthday
                      <DatePickerStyles

                        type={'date'}
                        input={true}
                        selected={startDate}
                        onChange={date => {
                          setStartDate(date);
                          setNewBirthday(date.toLocaleDateString('en-GB'));

                        }}

                        minDate={new Date('1923-01-01T00:00:00')}
                        maxDate={new Date()}
                        formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                        calendarStartDay={1}
                        placeholderText="Click to select a date"
                        dateFormat="dd/MM/yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    </Label>
                  </DatePickerWrapper>
                  <Label htmlFor="email">
                    Email
                    <Input
                      type="email"
                      name="email"
                      onBlur={handleBlur} />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>)
                      :
                      (!errors.email && touched.email ? <div>This is an CORRECT email</div> : "")}

                  </Label>
                </BlockFieldWrapper>
                <BlockFieldWrapper>
                  <Label htmlFor="phone">
                    Phone
                    <Input
                      type="text"
                      name="phone"
                      placeholder="+380000000000"
                    />
                    {errors.phone && touched.phone ? (
                      <div>{errors.phone}</div>)
                      :
                      (!errors.phone && touched.phone && values.phone !== "" ? <div>This is an CORRECT phone</div> : "")}
                  </Label>

                  <Label htmlFor="skype">
                    Skype
                    <Input
                      type="text"
                      name="skype"
                      value={values.skype ? values.skype : ''}
                      placeholder="Add a skype number"
                    />
                    {errors.skype && touched.skype ? (
                      <div>{errors.skype}</div>)
                      :
                      (!errors.skype && touched.skype && values.skype !== "" ? <div>This is an CORRECT skype</div> : "")}
                  </Label>
                </BlockFieldWrapper>
              </MainFieldWrapper>

              {isUpdateForm ?
                (<SubmitBtn type="submit" >
                  Save changes
                </SubmitBtn>)
                :
                (<SubmitBtn type="submit" disabled={!dirty}>
                  Save changes
                </SubmitBtn>)
              }
            </FormUserProfile>
          </div>
        )}
      </Formik>

    </Wrapper >
  );
};
