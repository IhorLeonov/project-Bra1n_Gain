import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import { updateUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors.js';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import * as yup from 'yup';




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
  FieldWrapper,
  ErrorMassege,
  ErrorCircleIcon,
  CheckCircleIcon,
  BiChevronDownIcon,
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
      for (const value of formData.values()) {
        console.log(value);
      }

      await dispatch(updateUser(formData));
      setIsUpdateForm(false);
      toast.success('Successfully!');
      resetForm();

    } catch (e) {
      console.error(e);
      toast.error('Oops, something is wrong. Try again!');

    }
  };

  //схема вадилации

  const schema = yup.object().shape({
    name: yup.string().max(16, 'Name must be 16 characters max').trim().required('Please enter your name'),
    email: yup.string().email("Incorrect email!").required('Email is required'),
    phone: yup.string().matches(/^\+?3?8?(0\d{9})$/, 'Phone format: "+380000000000"').max(13, 'Phone format: "+380000000000"').min(13, 'Phone format: "+380000000000"'),
    skype: yup.string().max(16, 'Skype must be 16 characters max!').min(3).matches(/^\S*$/, 'Skype must be without a space'),
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
                  <FieldWrapper>
                    <Label htmlFor="name"
                      className={`${touched.name && (values.name !== user?.name) ? (errors.name ? 'error' : 'success') : ''
                        }`}
                    >
                      User Name
                      <Input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your Name"
                        className={`${touched.name && (values.name !== user?.name) ? (errors.name ? 'error' : 'success') : ''
                          }`}
                      />
                      {errors.name && touched.name ? (
                        <ErrorMassege>{errors.name}</ErrorMassege>

                      )
                        :
                        (!errors.name && touched.name && (values.name !== user?.name) ?
                          <ErrorMassege>Great!</ErrorMassege> : "")}
                      <ErrorCircleIcon size={24} className={`${touched.name && (values.name !== user?.name) ? (errors.name ? 'error' : 'success') : ''
                        }`} />
                      <CheckCircleIcon size={24} className={`${touched.name && (values.name !== user?.name) ? (errors.name ? 'error' : 'success') : ''
                        }`} />

                    </Label>
                  </FieldWrapper>

                  <DatePickerWrapper>
                    <Label htmlFor="birthday"
                      className={`${newBirthday ? 'success' : ''}`}>
                      Birthday
                      <DatePickerStyles
                        type={'date'}
                        input={true}
                        selected={startDate}
                        onChange={date => {
                          setStartDate(date);
                          if (!date) {
                            setNewBirthday(null);
                          }
                          else {
                            setNewBirthday(date.toLocaleDateString('en-GB'));
                          }

                        }}
                        className={`${newBirthday ? 'success' : ''}`}
                        minDate={new Date('1923-01-01T00:00:00')}
                        maxDate={new Date()}
                        formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                        calendarStartDay={1}
                        placeholderText="Click to select a date"
                        dateFormat="dd.MM.yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"

                      />
                      <BiChevronDownIcon size={24} />
                    </Label>
                  </DatePickerWrapper>
                  <FieldWrapper>
                    <Label htmlFor="email"
                      className={`${touched.email && (values.email !== user?.email) ? (errors.email ? 'error' : 'success') : ''
                        }`}>
                      Email
                      <Input
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        className={`${touched.email && (values.email !== user?.email) ? (errors.email ? 'error' : 'success') : ''
                          }`}
                      />
                      {errors.email && touched.email ? (
                        <ErrorMassege>{errors.email}</ErrorMassege>)
                        :
                        (!errors.email && touched.email && (values.email !== user?.email) ? <ErrorMassege>Great!</ErrorMassege> : "")}

                      <ErrorCircleIcon size={24} className={`${touched.email && (values.email !== user?.email) ? (errors.email ? 'error' : 'success') : ''
                        }`} />
                      <CheckCircleIcon size={24} className={`${touched.email && (values.email !== user?.email) ? (errors.email ? 'error' : 'success') : ''
                        }`} />
                    </Label>
                  </FieldWrapper>

                </BlockFieldWrapper>
                <BlockFieldWrapper>
                  <FieldWrapper>
                    <Label htmlFor="phone"
                      className={`${touched.phone && values.phone && (values.phone !== user?.phone) ? (errors.phone ? 'error' : 'success') : ''
                        }`}
                    >
                      Phone
                      <Input
                        type="text"
                        name="phone"
                        placeholder="+380000000000"
                        className={`${touched.phone && (values.phone !== user?.phone) ? (errors.phone ? 'error' : 'success') : ''
                          }`}
                      />
                      {errors.phone && touched.phone ? (
                        <ErrorMassege>{errors.phone}</ErrorMassege>)
                        :
                        (!errors.phone && touched.phone && (values.phone !== user?.phone) ? <ErrorMassege>Great!</ErrorMassege> : "")
                      }
                      <ErrorCircleIcon size={24} className={`${touched.phone && (values.phone !== user?.phone) ? (errors.phone ? 'error' : 'success') : ''
                        }`} />
                      <CheckCircleIcon size={24} className={`${touched.phone && (values.phone !== user?.phone) ? (errors.phone ? 'error' : 'success') : ''
                        }`} />
                    </Label>
                  </FieldWrapper>

                  <FieldWrapper>
                    <Label htmlFor="skype"
                      className={`${touched.skype && (values.skype !== user?.skype) ? (errors.skype ? 'error' : 'success') : ''
                        }`}
                    >
                      Skype
                      <Input
                        type="text"
                        name="skype"
                        value={values.skype ? values.skype : ''}
                        placeholder="Add a skype number"
                        className={`${touched.skype && (values.skype !== user?.skype) ? (errors.skype ? 'error' : 'success') : ''
                          }`}
                      />
                      {errors.skype && touched.skype ? (
                        <ErrorMassege>{errors.skype}</ErrorMassege>)
                        :
                        (!errors.skype && touched.skype && (values.skype !== user?.skype) ? <ErrorMassege>Great!</ErrorMassege> : "")}
                      <ErrorCircleIcon size={24} className={`${touched.skype && (values.skype !== user?.skype) ? (errors.skype ? 'error' : 'success') : ''
                        }`} />
                      <CheckCircleIcon size={24} className={`${touched.skype && (values.skype !== user?.skype) ? (errors.skype ? 'error' : 'success') : ''
                        }`} />
                    </Label>
                  </FieldWrapper>

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
      <Toaster />
    </Wrapper >
  );
};
