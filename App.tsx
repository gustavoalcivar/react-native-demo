import React, {useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [title, setTitle] = useState('Welcome');
  const [name, setName] = useState({firstName: 'Gustavo', lastName: 'Alcívar'});
  const [sum, setSum] = useState({sum: 0, clicks: 0});
  const updateState = () => {
    if(title === 'Welcome') {
      setTitle('Bye');
      setName({firstName: 'Alfonso', lastName: 'Rodríguez'});
    } else {
      setTitle('Welcome');
      setName({firstName: 'Gustavo', lastName: 'Alcívar'});
    }
  };
  return (
    <View style={styles.body}>
      <Text style={{color: '#ffffff', fontSize: 20, fontStyle: 'italic', margin: 10, textTransform: 'uppercase',}}>{title}</Text>
      <Text style={styles.text}>My name is {name.firstName} {name.lastName}</Text>
      <Button title='Open youtube' onPress={() => {Linking.openURL('https://www.youtube.com')}}></Button>
      <Button title='Change state' onPress={updateState}></Button>
      <Text style={styles.text}>Sum: {sum.sum}</Text>
      <Text style={styles.text}>Number of clicks: {sum.clicks}</Text>
      <Button title='Add 5' onPress={() => {setSum({sum: sum.sum + 5, clicks: sum.clicks + 1})}}></Button>
      <View style={styles.button}>
        <Button title='Restart' onPress={() => {setSum({sum: 0, clicks: 0})}}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#00651C',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#1BFFFD',
    borderRadius: 90,
    //margin: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    //textTransform: 'uppercase',
  },
  button: {
    padding: 10,
    height: 100,
    width: 300,
  },
});

export default App;
