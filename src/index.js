import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Media from 'react-media';

import { App } from './App';
import { MobileAlert } from './common/components/MobileAlert';

ReactDOM.render(
  <React.StrictMode>
    <Media queries={{ small: { maxWidth: 719 } }}>
      {(matches) =>
        matches.small ? <MobileAlert /> : <App />
      }
    </Media>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
