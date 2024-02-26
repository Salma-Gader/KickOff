import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const button = ({onPress,title}) => {
  return (
      <TouchableOpacity onPress={onPress}  style={styles.container}>
        <LinearGradient style={styles.button}  end={{x:1,y:0}} start={{x:0,y:1}} colors={['#02008D','#02008D']} >
          <Text>Hello</Text>
        </LinearGradient>
        
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    bottom: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  button: { 
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
})
export default button