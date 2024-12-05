import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import "../../global.css";
import {onAuthStateChanged, User} from 'firebase/auth'
import { useState,useEffect } from 'react';
// import { firebase_auth } from '../../FirebaseConfig';

export default function RootLayout() {

//   const [user,setUser] = useState<User | null>(null)
// // 
//   useEffect(()=>{
//     onAuthStateChanged(firebase_auth,(user)=>{
//       console.log("user: ",user)
//     })
//   },[])
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="challenge/[id]"
          options={{ headerShown: false, animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="screens/StartChallengeScreen"
          options={{ headerShown: false, animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="screens/LoginPage"
          options={{ headerShown: false, animation: 'slide_from_bottom' }}
        />
      </Stack>
    </>
  );
}
