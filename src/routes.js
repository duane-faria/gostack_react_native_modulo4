import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '~/pages/Main';
import Podcast from '~/pages/Podcast';

const Stack = createStackNavigator();

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      navigationOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{
          title: 'My home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Podcast"
        component={Podcast}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;
