import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ResponsiveScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1, // Espacio a usar en la pantalla (1 es toda la pantalla si es que no existen más componentes al mismo nivel)
    // Si existen más componentes al mismo nivel, la propiedad flex determinará la proporción de pantalla que utilizará en relación a los otros componentes
    //alignItems: 'center',
    //alignItems: 'flex-start',
    alignItems: 'stretch', // strech expande el contenido
    //justifyContent: 'center', //
    //justifyContent: 'space-between', // deja un espacio entre los elementos, siempre y cuando no esten ocupando toda la pantalla (strech) y tengan un tamaño definido
    //justifyContent: 'space-around', // deja un espacio alrededor de los elementos, siempre y cuando no esten ocupando toda la pantalla (strech) y tengan un tamaño definido
    //justifyContent: 'flex-end',
    backgroundColor: '#00651C',
    //flexDirection: 'column',
    //flexDirection: 'row',
  },
  view1:{
    flex: 1,
    //width: 100,
    //height: 100,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2:{
    flex: 1,
    //width: 100,
    //height: 100,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3:{
    flex: 1,
    //width: 100,
    //height: 100,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  }
});

export default ResponsiveScreen;