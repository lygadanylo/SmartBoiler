import React from 'react';
import {AppRegistry} from 'react-native';
import reducer from './components/reducer';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './components/containers/Main';
import Stat from './components/containers/Satists';
const store = createStore(reducer, applyMiddleware(thunk));

const SmartHouse = createStackNavigator({
  Main: Main,
  Stat: Stat,
});

const Navigation = createAppContainer(SmartHouse);

const index = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => index);
