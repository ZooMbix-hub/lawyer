import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './app/App.jsx';
import {AppStore} from './app/AppStore.jsx';
import './index.css';
import './fonts/Stem-Bold.ttf';
import './fonts/Stem-Light.ttf';
import './fonts/Stem-Medium.ttf';
import './fonts/Stem-Regular.ttf';
import './fonts/Stem-SemiLight.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStore>
        <App />
      </AppStore>
    </BrowserRouter>
  </React.StrictMode>,
);
