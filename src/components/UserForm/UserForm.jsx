import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from 'formik';
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
    BlockFieldWrapper
} from './UserForm.styled';

export const UserForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values);
        console.log(actions);
    };

    const initialValues = {
        avatarURL: '',
        name: 'Nadiia Doe ',
        email: '',
        phone: '',
        skype: '',
        birthday: '',
    }

    const [startDate, setStartDate] = useState(null);


    return (
        <Wrapper>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <FormUserProfile autoComplete='off' >
                    <LabelAvatar htmlFor="avatarURL">
                        <AvatarWrapper>
                            <Avatar src="https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716051-stock-illustration-user-icon-vector.jpg" alt="avatar" />
                        </AvatarWrapper>
                        <UserName>{initialValues.name}</UserName>
                        <UserLabel>User</UserLabel>
                        <BtnUploadAvatar type="file" name="avatarURL" accept=".jpg, .jpeg, .png" />
                    </LabelAvatar>
                    <MainFieldWrapper>
                        <BlockFieldWrapper>
                            <Label htmlFor="name">
                                User Name
                                <Input type="text" name="name" />
                            </Label>
                            <DatePickerWrapper>
                                <Label htmlFor="birthday">
                                    Birthday
                                    <DatePickerStyles

                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Enter your date of birth"
                                        minDate={new Date('1923-01-01T00:00:00')}
                                        maxDate={new Date()}
                                        formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
                                        calendarStartDay={1}
                                    />

                                </Label>
                            </DatePickerWrapper>
                            <Label htmlFor="email">
                                Email
                                <Input type="email" name="email" />
                            </Label>
                        </BlockFieldWrapper>
                        <BlockFieldWrapper>
                            <Label htmlFor="name">
                                Phone
                                <Input type="text" name="phone" />
                            </Label>

                            <Label htmlFor="name">
                                Skype
                                <Input type="text" name="skype" placeholder="Add a skype number" />
                            </Label>
                        </BlockFieldWrapper>
                    </MainFieldWrapper>

                    <SubmitBtn type="submit">Save changes</SubmitBtn>
                </FormUserProfile>
            </Formik>


        </Wrapper>
    );
};
