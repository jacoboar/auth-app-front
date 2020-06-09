import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';

import { SHOW_ALERT, HIDE_ALERT } from '../../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        category,
      },
    });
  };

  const hideAlert = () => {
    dispatch({
      type: HIDE_ALERT,
    });
  };

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
        hideAlert,
      }}>
      {props.children}
    </alertContext.Provider>
  );
};

export { AlertState };
