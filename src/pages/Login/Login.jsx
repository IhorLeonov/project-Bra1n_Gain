import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { LoginForm, LoginInput, ContainerSignUp } from './Login.styled';

export default function LoginView() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (email !== '' && password !== '') {
      // dispatch(authOperations.logIn({ email, password }));
    }
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <h1>Log In</h1>
        <label>
          Email
          <LoginInput
            id="log"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <LoginInput
            id="log"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log in</button>
      </LoginForm>
      <ContainerSignUp>
        <button type="button">Sign up</button>
      </ContainerSignUp>
    </div>
  );
}
