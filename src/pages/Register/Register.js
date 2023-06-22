import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import {
  RegisterForm,
  RegisterInput,
  ContainerLogInBtn,
  Registerlabel,
  RegisterTitle,
  RegisterNameOfInput,
  RegisterSubmitBtn,
  LogInBtn,
  LogInBtnText,
} from './Register.styled';

export default function Register() {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '' && email !== '' && password !== '') {
      //  dispatch(authOperations.register({ name, email, password }));
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterTitle>Sign Up</RegisterTitle>
        <RegisterNameOfInput>Name</RegisterNameOfInput>
        <Registerlabel>
          <RegisterInput
            id="reg"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </Registerlabel>
        <RegisterNameOfInput>Email</RegisterNameOfInput>
        <Registerlabel>
          <RegisterInput
            id="reg"
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Registerlabel>
        <RegisterNameOfInput>Password</RegisterNameOfInput>
        <Registerlabel>
          <RegisterInput
            id="reg"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </Registerlabel>

        <RegisterSubmitBtn type="submit">Sign Up</RegisterSubmitBtn>
      </RegisterForm>
      <ContainerLogInBtn>
        <LogInBtn type="button">
          <LogInBtnText>Log In</LogInBtnText>
        </LogInBtn>
      </ContainerLogInBtn>
    </div>
  );
}
