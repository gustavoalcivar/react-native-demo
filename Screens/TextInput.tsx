import React, {useState} from 'react';
import {
  Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const TextInputScreen = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const onPressHandler = () => {
      setSubmitted(!submitted);
    }
  return (
    <View style={styles.body}>
        <Text style={styles.text}>Write your name</Text>
        <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. Peter'
        //secureTextEntry //no funciona en multiliena
        onChangeText={(value) => setName(value)} />
        <Text style={styles.text}>Write your number</Text>
        <TextInput
        style={styles.input}
        placeholder='e.g. 0999999888'
        //keyboardType='numeric'
        keyboardType='phone-pad'
        maxLength={10}
        //editable={false}
        onChangeText={(value) => setNumber(value)} />
        <Text style={styles.text}>Your name is {name}, and your number is {number}</Text>
        <Button
        title={submitted?'Clear':'Submit'}
        //disabled={true}
        color='#fc0017'
        onPress={() => {setSubmitted(!submitted)}}></Button>
        {submitted?
          <Text style={styles.text}>Your are registred as {name}</Text>
        :
        null
        }
        <TouchableOpacity 
          onPress={onPressHandler}
          style={styles.button}
          activeOpacity={0.1}>
          <Text style={styles.text}>{submitted?'Clear':'Submit'}</Text>
        </TouchableOpacity>
        <TouchableHighlight 
          onPress={onPressHandler}
          style={styles.button}
          activeOpacity={0.1}
          underlayColor='#fc0017'>
          <Text style={styles.text}>{submitted?'Clear':'Submit'}</Text>
        </TouchableHighlight>
        <View style={styles.button}>
        <TouchableWithoutFeedback 
          onPress={onPressHandler}>
          <Text style={styles.text}>{submitted?'Clear':'Submit'}</Text>
        </TouchableWithoutFeedback>
        <Pressable
        onPress={onPressHandler}
        //onLongPress={onPressHandler}
        //delayLongPress={2000}
        hitSlop={{top: 10, bottom: 10, right:10, left: 10}}
        //disabled={true}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed?'#fc0017':'#00ff00'}, styles.pressable
        ]}>
          <Text style={styles.text}>{submitted?'Clear':'Submit'}</Text>
        </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    margin: 5,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#4ae1fa',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16
  },
  button: {
    backgroundColor: '#00ff00',
    with: 150,
    height: 30,
    alignItems: 'center',
    margin: 10,
  },
  pressable: {
    with: 150,
    height: 30,
    alignItems: 'center',
    margin: 10,
  },
});

export default TextInputScreen;
