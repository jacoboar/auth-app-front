import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';

import { Container } from '../../common/components/Container';
import { TextInput } from '../../common/components/Form';
import { Button } from '../../common/components/Button';
import { Alert } from '../../common/components/Alert';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alerts/alertContext';

const LoginWrapper = styled.section`
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

function Login(props) {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert, hideAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { msg, authenticated, login } = authContext;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    if (authenticated) {
      props.history.push('/');
    }

    if (msg) {
      showAlert(msg.msg, msg.category);
    }
    // eslint-disable-next-line
  }, [msg, authenticated, props.history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    hideAlert();

    if (email.trim() === '' || password.trim() === '') {
      showAlert('All fields are required', 'error');
      return;
    }

    login({ email, password });
  };

  return (
    <Container>
      <LoginWrapper>
        <SectionTitle>Login</SectionTitle>
        <form onSubmit={handleSubmit} noValidate>
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
                  Login
                </Button>
              )}
            </ClassNames>
          </ButtonWrapper>
        </form>
      </LoginWrapper>
    </Container>
  );
}

export { Login };
