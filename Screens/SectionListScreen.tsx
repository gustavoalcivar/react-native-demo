import React, {useState} from 'react';
import {
    RefreshControl,
    SectionList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const SectionListScreen = () => {
  const [DATA, setDATA] = useState(
    [
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
        },
        {
            title: 'Title 2',
            data: ['Item 2-1']
        },
        {
            title: 'Title 3',
            data: ['Item 3-1', 'Item 3-2']
        },
      ]
  );
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setDATA([...DATA, {title: `Title ${DATA.length + 1}`, data: [`Item ${DATA.length + 1}-1`, `Item ${DATA.length + 1}-2`, `Item ${DATA.length + 1}-3`]}]);
    setRefreshing(false);
  };
  return (
    <SectionList
    keyExtractor={(item, index) => index.toString()}
    sections={DATA}
    renderItem={({item}) => (
        <Text style={styles.text}>{item}</Text>
    )}
    renderSectionHeader={({section}) => (
        <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
        </View>
    )}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#ff00ff']} />}>
    </SectionList>
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

export default SectionListScreen;
