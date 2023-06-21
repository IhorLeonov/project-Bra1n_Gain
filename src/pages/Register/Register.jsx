import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { RegisterForm, RegisterInput, ContainerLogIn } from './Register.styled';

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
        <h1>Sign Up</h1>
        <label>
          Name
          <RegisterInput
            id="reg"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <RegisterInput
            id="reg"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <RegisterInput
            id="reg"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign Up</button>
      </RegisterForm>
      <ContainerLogIn>
        <button type="button">Log In</button>
      </ContainerLogIn>
    </div>
  );
}
