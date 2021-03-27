import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => {
    setText(textValue);
  };

  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles._input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles._btn} onPress={() => addItem(text)}>
        <Text style={styles._btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  _input: {
    alignSelf: 'center',
    width: 320,
    height: 80,
    padding: 20,
    marginTop: 5,
    fontSize: 16,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: '#ccc',
  },
  _btn: {
    alignSelf: 'center',
    backgroundColor: '#c2bad8',
    padding: 19,
    margin: 5,
    width: 320,
    borderRadius: 10,
  },
  _btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default AddItem;
