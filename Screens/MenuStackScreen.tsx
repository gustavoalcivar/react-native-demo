import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import FlatListScreen from './FlatListScreen';
import ImageScreen from './ImageScreen';
import MenuScreen from './MenuScreen';
import ResponsiveExerciseScreen from './ResponsiveExerciseScreen';
import ResponsiveScreen from './ResponsiveScreen';
import ScrollViewScreen from './ScrollViewScreen';
import SectionListScreen from './SectionListScreen';
import TextInputScreen from './TextInput';
import WelcomeScreen from './WelcomeScreen';

const MenuStack = createNativeStackNavigator();

const MenuStackScreen = () => {
  return(
    <MenuStack.Navigator /*screenOptions={{header: () => null}}*/>
      <MenuStack.Screen name="Menu2" component={MenuScreen} options={{headerShown: false}} />
      <MenuStack.Screen name="Welcome2" component={WelcomeScreen} /*options={{header: () => null}}*/ />
      <MenuStack.Screen name="Responsive" component={ResponsiveScreen} />
      <MenuStack.Screen name="ResponsiveExercise" component={ResponsiveExerciseScreen} />
      <MenuStack.Screen name="ScrollView" component={ScrollViewScreen} />
      <MenuStack.Screen name="FlatList" component={FlatListScreen} />
      <MenuStack.Screen name="SectionList" component={SectionListScreen} />
      <MenuStack.Screen name="TextInput" component={TextInputScreen} />
      <MenuStack.Screen name="Image" component={ImageScreen} />
    </MenuStack.Navigator>
  );
};

export default MenuStackScreen;