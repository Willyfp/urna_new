import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../@types/navigate';
import Home from '../pages/Home';
import Vote from '../pages/Vote';

const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="VoteScreen" component={Vote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
