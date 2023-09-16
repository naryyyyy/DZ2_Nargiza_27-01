import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReduser } from './redux/redusers/reduser';
import userReduser from './redux/redusers/userReduser';

const store=createStore(rootReduser)
//const store=createStore(userReduser)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
  
);

