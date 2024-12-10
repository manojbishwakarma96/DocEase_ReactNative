import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{title: "Home"}}></Tabs.Screen>
      <Tabs.Screen name='about' options={{title: "About"}}></Tabs.Screen>
      <Tabs.Screen name='profile' options={{title: "Profile"}}></Tabs.Screen>
    </Tabs>
  )
}

export default TabRoot