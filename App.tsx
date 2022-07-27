import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './Screens/MenuScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ResponsiveScreen from './Screens/ResponsiveScreen';
import ResponsiveExerciseScreen from './Screens/ResponsiveExerciseScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator /*screenOptions={{header: () => null}}*/>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} /*options={{header: () => null}}*/ />
        <Stack.Screen name="Responsive" component={ResponsiveScreen} />
        <Stack.Screen name="ResponsiveExercise" component={ResponsiveExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;