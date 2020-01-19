import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import reducer from './components/reducer';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

const index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => index);
