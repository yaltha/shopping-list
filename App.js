/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    !text
      ? Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}])
      : setItems(prevItems => {
          return [{id: uuidv4(), text}, ...prevItems];
        });
  };

  return (
    <View style={styles._container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
});
