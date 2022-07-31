import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const PressableButton = (props : any) => {
    return(
        <Pressable
            onPress={props.onPressFunction}
            //onLongPress={onPressHandler}
            //delayLongPress={2000}
            hitSlop={{top: 10, bottom: 10, right:10, left: 10}}
            //disabled={true}
            android_ripple={{color: '#00f'}}
            style={({pressed}) => [
            {backgroundColor: pressed?'#fc0017':'#00ff00'}, styles.pressable, {...props.style}
            ]}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        margin: 5,
        textAlign: 'center',
      },
    pressable: {
      with: 150,
      height: 30,
      alignItems: 'center',
      margin: 10,
    },
});
export default PressableButton;