import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ResponsiveExerciseScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.view1A}>
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
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={styles.view2A}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
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
  view1A:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  view1:{
    flex: 1,
    backgroundColor: '#01f1ed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2:{
    flex: 2,
    //width: 100,
    //height: 100,
    backgroundColor: '#fa44ef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3:{
    flex: 3,
    //width: 100,
    //height: 100,
    backgroundColor: '#faf558',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view4:{
    backgroundColor: '#fc0017',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view5:{
    backgroundColor: '#1ffc00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2A:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view6:{
    flex: 1,
    backgroundColor: '#e8ffe5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view7:{
    flex: 1,
    backgroundColor: '#000cfe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  }
});

export default ResponsiveExerciseScreen;