import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { setupStore } from './app/provides/config/store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
