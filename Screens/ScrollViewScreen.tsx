import React, {useState} from 'react';
import {
    RefreshControl,
    ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ScrollViewScreen = () => {
  const [items, setItems] = useState([
    {key: 1, value: 'Item 1'},
    {key: 2, value: 'Item 2'},
    {key: 3, value: 'Item 3'},
    {key: 4, value: 'Item 4'},
    {key: 5, value: 'Item 5'},
    {key: 6, value: 'Item 6'},
    {key: 7, value: 'Item 7'},
    {key: 8, value: 'Item 8'},
    {key: 9, value: 'Item 9'},
    {key: 10, value: 'Item 10'},
    {key: 11, value: 'Item 11'},
    {key: 12, value: 'Item 12'},
    {key: 13, value: 'Item 13'},
    {key: 14, value: 'Item 14'},
    {key: 15, value: 'Item 15'}
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: items.length + 1, value: `Item ${items.length + 1}`}]);
    setRefreshing(false);
  };
  return (
    <ScrollView style={styles.body}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#ff00ff']} />}>
    {
        items.map((item) => {
            return(
                <View style={styles.item} key={item.key}>
                    <Text style={styles.text}>{item.value}</Text>
                </View>
            );
        })
    }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    margin: 10,
  },
  item: {
    margin: 7,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScrollViewScreen;
