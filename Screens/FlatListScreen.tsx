import React, {useState} from 'react';
import {
    FlatList,
    RefreshControl,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const FlatListScreen = () => {
  const [items, setItems] = useState([
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5'},
    {value: 'Item 6'},
    {value: 'Item 7'},
    {value: 'Item 8'},
    {value: 'Item 9'},
    {value: 'Item 10'},
    {value: 'Item 11'},
    {value: 'Item 12'},
    {value: 'Item 13'},
    {value: 'Item 14'},
    {value: 'Item 15'}
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {value: `Item ${items.length + 1}`}]);
    setRefreshing(false);
  };
  return (
    <FlatList
    //numColumns={2}
    //horizontal
    //inverted
    keyExtractor={(item, index) => index.toString()}
    data={items}
    renderItem={({item}) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.value}</Text>
        </View>
    )}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#ff00ff']} />}>
    </FlatList>
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

export default FlatListScreen;
