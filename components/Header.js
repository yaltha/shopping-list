import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles._header}>
      <Text style={styles._text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping Lists',
};
const styles = StyleSheet.create({
  _header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  _text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default Header;
