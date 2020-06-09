import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import { Home } from '../domain/home';
import { Login } from '../domain/login';
import { Register } from '../domain/register';
import { Header } from '../common/components/Header';

import { AuthState } from '../context/auth';
import { AlertState } from '../context/alerts';

import tokenAuth from '../config/token';

import theme from './theme';
import GlobalStyles from './globalStyles';

const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthState>
        <AlertState>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </BrowserRouter>
        </AlertState>
      </AuthState>
    </ThemeProvider>
  );
}

export { App };
