import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from '~/store';
import Routes from '~/routes';
import Player from '~/components/Player';
import '~/config/StatusBar';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Player />
    </Provider>
  );
};

export default App;
