import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: '20' },
    { name: 'Friend #2', age: '45' },
    { name: 'Friend #3', age: '32' },
    { name: 'Friend #4', age: '56' },
    { name: 'Friend #5', age: '28' },
    { name: 'Friend #6', age: '39' },
    { name: 'Friend #7', age: '46' },
    { name: 'Friend #8', age: '16' }
  ]
  return (
    <FlatList 
      keyExtractor={friend => friend.age}
      data={friends}
      renderItem={ ({item}) => {
        return (
        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        )
      } }
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
})

export default ListScreen

