import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/auth/login';
import Main from './screens/child/main';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return <StackNavigator />;
}

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
