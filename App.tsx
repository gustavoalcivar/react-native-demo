import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WelcomeScreen from './Screens/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuStackScreen from './Screens/MenuStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator /*screenOptions={{header: () => null}}*/
      screenOptions={({route}) => ({tabBarIcon: ({focused, color, size}) => {
        let iconName = '';
        size = focused ? 30 : 20;
        if(route.name === 'Menu') {
          iconName = 'monument';
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        } else if(route.name === 'Welcome') {
          iconName = focused ? 'golf' : 'flower-sharp';
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'lightgray',
      tabBarActiveBackgroundColor: '#1ffc00',
      tabBarInactiveBackgroundColor: '#999',
      //tabBarShowLabel: false,
      tabBarLabelStyle: {fontSize: 14}
      })}>
      <Tab.Screen name="Menu" component={MenuStackScreen} options={{headerShown: false, tabBarBadge: 3}} />
      <Tab.Screen name="Welcome" component={WelcomeScreen} options={{tabBarBadge: 1}} />
    </Tab.Navigator>
</NavigationContainer>
  );
}

export default App;