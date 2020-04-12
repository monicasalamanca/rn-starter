 import React, { useState } from 'react';
 import { View, Text, StyleSheet, TextInput } from 'react-native';

 const TextScreen = () => {
    const [pswd, setPswd] = useState('')

    return <View>
      <Text>Enter Password: </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={pswd}
        onChangeText={(newText) => setPswd(newText)}
      />
      { pswd.length < 5 ? <Text>Your Password must be more than 5 characters</Text> : null }
    </View>
 }

 const styles = StyleSheet.create({
   input: {
     margin: 15,
     borderColor: 'black',
     borderWidth: 1,
     padding: 2
   }
 })

 export default TextScreen