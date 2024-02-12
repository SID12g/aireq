import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './home';
import Conversation from './conversation';
import Feed from './feed';
import Record from './record';
import Setting from './setting';

const Tab = createBottomTabNavigator();

export default function ChildNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Conversation" component={Conversation} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Record" component={Record} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
