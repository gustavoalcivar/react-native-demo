import React, {useState} from 'react';
import {
  Alert,
  Button,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const TextInputScreen = ({navigation, route} : any) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const onPressHandler = () => {
      navigation.setParams({ItemsNumber: 11});
      if(name.length > 0)
        setSubmitted(!submitted);
      else {
        Alert.alert('Warning', 'The name must not be blank', [
          {text: 'okay', onPress: () => (console.warn('OKAY pressed'))},
          {text: 'cancel', onPress: () => (console.warn('CANCEL pressed'))},
          {text: 'later', onPress: () => (console.warn('LATER pressed'))},
        ],
        {cancelable: true, onDismiss: () => (console.warn('Alert dismissed'))}); // Para cerrar la alerta tocando en cualquier parte de la pantalla
        ToastAndroid.show('The name must not be blank', ToastAndroid.LONG);
        ToastAndroid.showWithGravity('The name must not be blank', ToastAndroid.LONG, ToastAndroid.TOP);
        ToastAndroid.showWithGravityAndOffset('The name must not be blank', ToastAndroid.LONG, ToastAndroid.TOP, 0, 300);
      }
    }
    const {ItemsNumber} = route.params;
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Items number from menu: {ItemsNumber}</Text>
      <Modal
        visible={showModal}
        transparent
        animationType='slide'
        hardwareAccelerated
        onRequestClose={() => (setShowModal(false))}>
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>MESSAGE</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>Message info</Text>
              </View>
              <View style={[{alignItems: 'center'}]}>
              <Pressable
                onPress={() => (setShowModal(false))}
                style={styles.warning_button}
                android_ripple={{color: '#00f'}}>
                  <Text style={styles.text}>OKAY</Text>
                </Pressable>
              </View>
            </View>
          </View>
      </Modal>
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
        <Pressable
        onPress={() => (setShowModal(true))}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed?'#fc0017':'#00ff00'}, styles.pressable
        ]}>
          <Text style={styles.text}>Show modal</Text>
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
  warning_modal: {
    width:300,
    height: 300,
    backgroundColor: '#999',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 50,
  },
  centered_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    width: 250,
    height: 30,
    backgroundColor: '#00ffff',
    borderRadius: 45,
  },
});

export default TextInputScreen;
