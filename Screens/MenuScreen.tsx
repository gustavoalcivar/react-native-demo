import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function MenuScreen({ navigation } : any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.button}>
        <Button
          title="Welcome"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Responsive UI"
          onPress={() => navigation.navigate('Responsive')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Responsive UI - Exercise"
          onPress={() => navigation.navigate('ResponsiveExercise')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="ScrollView"
          onPress={() => navigation.navigate('ScrollView')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="FlatList"
          onPress={() => navigation.navigate('FlatList')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="SectionList"
          onPress={() => navigation.navigate('SectionList')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="TextInput"
          onPress={() => navigation.navigate('TextInput')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 300,
  },
  title: {
    fontSize: 40,
  },
});

export default MenuScreen;