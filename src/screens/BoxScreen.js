import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}></Text>
      <Text style={styles.textTwoStyle}></Text>
      <Text style={styles.textThreeStyle}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: 'pink',
    height: 100,
    width: 100
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    height: 100,
    width: 100,
    top: 100
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple',
    height: 100,
    width: 100
  }
})

export default BoxScreen