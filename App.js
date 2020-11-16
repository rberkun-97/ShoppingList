/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Almond Milk'},
    {id: uuidv4(), text: 'Coffee'},
    {id: uuidv4(), text: 'Sweet Potato'},
    {id: uuidv4(), text: 'Garlic'},
  ]);

  const deleteItem = (id) => {
    console.log('delete', id);
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    console.log('text', text);
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'});
    } else {
      setItems((prevItems) => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
