import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="index" options={{headerShown: false, title: "Home"}} ></Stack.Screen>
    <Stack.Screen name="BraMaxDetails"></Stack.Screen>
    <Stack.Screen name="DailyChallenge"></Stack.Screen>
    <Stack.Screen name="PuzzleGame"></Stack.Screen>
    <Stack.Screen name="ChessGame"></Stack.Screen>
 <Stack.Screen name="SignInScreen" options={{headerShown: false, title: "Sign In" }} />
   </Stack>
  )
}

export default RootLayout