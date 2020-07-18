import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from '~/store';
import Routes from '~/routes';
import '~/config/StatusBar';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
