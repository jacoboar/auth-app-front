import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';

import { Container } from '../../common/components/Container';
import { TextInput } from '../../common/components/Form';
import { Button } from '../../common/components/Button';
import { Alert } from '../../common/components/Alert';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alerts/alertContext';

const RegisterWrapper = styled.section`
  align-self: center;
  margin-bottom: auto;
  margin-top: auto;
  padding: 1.5rem;
  min-width: 30rem;
  background-color: #fff;
`;

const SectionTitle = styled.h1`
  margin-bottom: 0.1rem;
  color: #000;
  font-weight: 600;
  font-size: 1.5em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-bottom: -1.5rem;
  margin-right: -1.5rem;
  margin-top: 2rem;
`;

function Register(props) {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert, hideAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { msg, authenticated, register } = authContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push('/');
    }

    if (msg) {
      showAlert(msg.msg, msg.category);
    }
    // eslint-disable-next-line
  }, [msg, authenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { name, email, password, confirm } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    hideAlert();

    if (password !== confirm) {
      showAlert(`Passwords don't match`, 'error');
      return;
    }

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      showAlert('All fields are required', 'error');
      return;
    }

    register({ name, email, password });
  };

  return (
    <Container>
      <RegisterWrapper>
        <SectionTitle>Register</SectionTitle>
        <form onSubmit={handleSubmit}>
          <TextInput
            type={'text'}
            name={'name'}
            label={'Name'}
            parentState={user}
            setParentState={setUser}
          />
          <TextInput
            type={'email'}
            name={'email'}
            label={'Email'}
            parentState={user}
            setParentState={setUser}
          />
          <TextInput
            type={'password'}
            name={'password'}
            label={'Password'}
            description={'The password must be at least 6 characters long'}
            parentState={user}
            setParentState={setUser}
          />
          <TextInput
            type={'password'}
            name={'confirm'}
            label={'Confirm Password'}
            parentState={user}
            setParentState={setUser}
          />
          {alert ? (
            <Alert msg={alert.msg} category={alert.category}></Alert>
          ) : null}
          <ButtonWrapper>
            <ClassNames>
              {({ css }) => (
                <Button
                  wrapperClassName={css({ width: '50%' })}
                  type={'submit'}>
                  Register
                </Button>
              )}
            </ClassNames>
          </ButtonWrapper>
        </form>
      </RegisterWrapper>
    </Container>
  );
}

export { Register };
