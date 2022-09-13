import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import React from 'react'
import { DrawerNavigation } from './src/navigation/DrawerNavigation'

const App = () => {
  //console.log('ulises :v')
  return (
    
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default App