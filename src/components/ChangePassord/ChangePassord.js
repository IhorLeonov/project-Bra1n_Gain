import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors.js';
import { changePassord } from 'redux/auth/operations';

import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';


import * as yup from 'yup';

import {
    FormStyle,
    InputWrapper,
    BtnToggleVisiblePassord,
    VisionIcons,
    WrapperBtn,
    FormPasswordName,
} from './ChangePassord.styled.jsx';
import {
    Input,
    SubmitBtn,
    Wrapper,
    Label,
    ErrorMassege,
} from '../UserForm/UserForm.styled.jsx';

export const ChangePassord = () => {
    const { t } = useTranslation();

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const [typeOld, setTypeOld] = useState('password');
    const [typeNew, setTypeNew] = useState('password');
    const [typeConfirm, setTypeConfirm] = useState('password');

    //схема вадилации

    const schema = yup.object().shape({
        oldPassword: yup.string().min(1, 'Password must be 1 characters long'),
        // .matches(/[0-9]/, 'Password requires a number')
        // .matches(/[a-z]/, 'Password requires a lowercase letter')
        // .matches(/[A-Z]/, 'Password requires an uppercase letter')
        // .matches(/[^\w]/, 'Password requires a symbol')
        newPassword: yup
            .string()
            .min(6, 'Password must be 6 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter'),
        // .matches(/[^\w]/, 'Password requires a symbol'),
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref('newPassword'), null],
                'Must match "New password" field value'
            ),
    });

    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    function togglePassInputNew(e) {
        const typeBtnPass = e.currentTarget.name;

        switch (typeBtnPass) {
            case 'oldPassword':
                typeOld === 'password' ? setTypeOld('text') : setTypeOld('password');
                break;
            case 'newPassword':
                typeNew === 'password' ? setTypeNew('text') : setTypeNew('password');
                break;
            case 'confirmPassword':
                typeConfirm === 'password'
                    ? setTypeConfirm('text')
                    : setTypeConfirm('password');
                break;
            default:
                return;
        }
    }

    const handleFormSubmit = async (values, { resetForm }) => {
        try {
            const data = {
                email: user?.email,
                password: values.oldPassword,
                newPassword: values.newPassword,
            };

            const { payload } = await dispatch(changePassord(data));
            switch (payload) {
                case 200:
                    toast.success('Successfully!');
                    break;
                case 'Request failed with status code 401':
                    toast.error('Password is incorrect');
                    break;
                default:
                    toast.error('Oops, something is wrong. Try again!');
            }
        } catch (e) {
            console.log(e.message);
        }
        resetForm();
    };

    return (
        <Wrapper>
            <FormPasswordName> {t('accountPage.ChangePassword')}</FormPasswordName>

            <Formik
                dirty
                initialValues={initialValues}
                validationSchema={schema}
                enableReinitialize={true}
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    resetForm,
                    errors,
                    touched,
                }) => (
                    <div>
                        <FormStyle autoComplete="off" onSubmit={handleSubmit}>
                            <InputWrapper>
                                <Label
                                    htmlFor="oldPassword"
                                    className={`${touched.oldPassword && values.oldPassword !== ''
                                        ? errors.oldPassword
                                            ? 'error'
                                            : 'success'
                                        : ''
                                        }`}
                                >
                                    {t('accountPage.OldPassword')}

                                    <Input
                                        type={typeOld}
                                        name="oldPassword"
                                        value={values.oldPassword}
                                        placeholder={t('accountPage.EnterOld')}
                                        onChange={handleChange}
                                        className={`${touched.oldPassword && values.oldPassword !== ''
                                            ? errors.oldPassword
                                                ? 'error'
                                                : 'success'
                                            : ''
                                            }`}
                                    />
                                    <BtnToggleVisiblePassord
                                        type="button"
                                        name="oldPassword"
                                        onClick={togglePassInputNew}
                                    >
                                        <VisionIcons type={typeOld} />
                                    </BtnToggleVisiblePassord>
                                    {errors.oldPassword &&
                                        touched.oldPassword &&
                                        values.oldPassword !== '' ? (
                                        <ErrorMassege>{errors.oldPassword}</ErrorMassege>
                                    ) : !errors.oldPassword &&
                                        touched.oldPassword &&
                                        values.oldPassword !== '' ? (
                                        <ErrorMassege></ErrorMassege>
                                    ) : (
                                        ''
                                    )}
                                </Label>
                            </InputWrapper>
                            <InputWrapper>
                                <Label
                                    htmlFor="newPassword"
                                    className={`${touched.newPassword && values.newPassword !== ''
                                        ? errors.newPassword
                                            ? 'error'
                                            : 'success'
                                        : ''
                                        }`}
                                >
                                    {t('accountPage.NewPassword')}

                                    <Input
                                        type={typeNew}
                                        name="newPassword"
                                        value={values.newPassword}
                                        placeholder={t('accountPage.EnterNew')}
                                        onChange={handleChange}
                                        className={`${touched.newPassword && values.newPassword !== ''
                                            ? errors.newPassword
                                                ? 'error'
                                                : 'success'
                                            : ''
                                            }`}
                                    />
                                    <BtnToggleVisiblePassord
                                        type="button"
                                        name="newPassword"
                                        onClick={togglePassInputNew}
                                    >
                                        <VisionIcons type={typeNew} />
                                    </BtnToggleVisiblePassord>
                                    {errors.newPassword &&
                                        touched.newPassword &&
                                        values.newPassword !== '' ? (
                                        <ErrorMassege>{errors.newPassword}</ErrorMassege>
                                    ) : !errors.newPassword &&
                                        touched.newPassword &&
                                        values.newPassword !== '' ? (
                                        <ErrorMassege>Correct!</ErrorMassege>
                                    ) : (
                                        ''
                                    )}
                                </Label>
                            </InputWrapper>
                            <InputWrapper>
                                <Label
                                    htmlFor="confirmPassword"
                                    className={`${touched.confirmPassword && values.confirmPassword !== ''
                                        ? errors.confirmPassword
                                            ? 'error'
                                            : 'success'
                                        : ''
                                        }`}
                                >

                                    {t('accountPage.ConfirmPassword')}
                                    <Input
                                        type={typeConfirm}
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        placeholder={t('accountPage.EnterConfirm')}
                                        onChange={handleChange}
                                        className={`${touched.confirmPassword && values.confirmPassword !== ''
                                            ? errors.confirmPassword
                                                ? 'error'
                                                : 'success'
                                            : ''
                                            }`}
                                    />
                                    <BtnToggleVisiblePassord
                                        type="button"
                                        name="confirmPassword"
                                        onClick={togglePassInputNew}
                                    >
                                        <VisionIcons type={typeConfirm} />
                                    </BtnToggleVisiblePassord>
                                    {errors.confirmPassword &&
                                        touched.confirmPassword &&
                                        values.confirmPassword !== '' ? (
                                        <ErrorMassege>{errors.confirmPassword}</ErrorMassege>
                                    ) : !errors.confirmPassword &&
                                        touched.confirmPassword &&
                                        values.confirmPassword !== '' ? (
                                        <ErrorMassege>Correct!</ErrorMassege>
                                    ) : (
                                        ''
                                    )}
                                </Label>
                            </InputWrapper>

                            <WrapperBtn>
                                <SubmitBtn
                                    type="submit"
                                    disabled={
                                        !values.oldPassword ||
                                        !values.newPassword ||
                                        !values.confirmPassword ||
                                        errors.oldPassword ||
                                        errors.newPassword ||
                                        errors.confirmPassword
                                    }
                                >
                                    {t('accountPage.SaveChanges')}
                                </SubmitBtn>
                            </WrapperBtn>
                        </FormStyle>
                    </div>
                )}
            </Formik>
            <Toaster />
        </Wrapper>
    );
};
