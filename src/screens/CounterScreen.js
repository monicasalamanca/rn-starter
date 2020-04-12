import React, { useReducer } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'inc' || 'dec', payload: 1 || -1 }

  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + action.payload }
    case 'dec':
      return { ...state, count: state.count + action.payload }
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return <View>
    <Button 
      title="Increase" 
      onPress={() => {
        dispatch({ type: 'dec', payload: 1 })
      }} />
    <Button 
      title="Decrease"
      onPress={() => {
        dispatch({ type: 'dec', payload: -1 })
      }}
    />
    <Text>Counter {state.count}</Text>
  </View>
}

const styles = StyleSheet.create({

})

export default CounterScreen