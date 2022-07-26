import * as React from 'react';
import { Button, View, Text } from 'react-native';

function MenuScreen({ navigation } : any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button
        title="Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

export default MenuScreen;