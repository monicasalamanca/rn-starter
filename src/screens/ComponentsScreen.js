import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreens = () => {
  const name = 'Monica'

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native! </Text>
      <Text style={styles.otherTextStyle}>My name is: {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  otherTextStyle: {
    fontSize: 20
  }
})

export default ComponentsScreens