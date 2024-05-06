import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for ReactDOM
root.render(
  <Provider store={store}>
    <App /> {/* Render the App component wrapped with Provider */}
  </Provider>
);
