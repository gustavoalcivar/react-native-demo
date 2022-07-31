import React, {useState} from 'react';
import {
  Alert,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import PressableButton from './Components/PressableButton';

const ImageScreen = () => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const onPressHandler = () => {
      if(name.length > 0)
        setSubmitted(!submitted);
      else {
        Alert.alert('Warning', 'The name must not be blank');
      }
    }
  return (
    <ImageBackground style={styles.body}
    source={{uri:'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'}}>
      <Text style={styles.text}>Write your name</Text>
        <TextInput
        style={styles.input}
        placeholder='e.g. Peter'
        onChangeText={(value) => setName(value)} />
        <PressableButton
          onPressFunction={onPressHandler}
          title={submitted?'Clear':'Submit'}
          style={{margin:20}}
        />
        {/*<Pressable
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
      </Pressable>*/}
        {submitted?
        <View style={styles.body}>
          <Text style={styles.text}>Your are registred as {name}</Text>
          <Image
        style={styles.image}
        resizeMode='stretch'
        //source={require('../assets/done.png')}
        source={{uri:'https://cdn.pixabay.com/photo/2012/04/18/19/01/check-37583_960_720.png'}}
        //blurRadius={5}
        />
        </View>
        :
        <Image
        style={styles.image}
        resizeMode='stretch'
        source={require('../assets/error.png')}></Image>
        }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    margin: 5,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#4ae1fa',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16
  },
  image: {
    width:100,
    height: 100,
    margin:10,
  },
  pressable: {
    with: 150,
    height: 30,
    alignItems: 'center',
    margin: 10,
  },
});

export default ImageScreen;
