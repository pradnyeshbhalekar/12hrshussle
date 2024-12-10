import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'react-native';
import "../../global.css";
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { firebase_auth } from '../../FirebaseConfig';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function RootLayout() {
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAlertState = async () => {
      const alertTriggered = await AsyncStorage.getItem('alertTriggered');
      return alertTriggered === 'true';
    };

    const unsubscribe = onAuthStateChanged(firebase_auth, async (authUser) => {
      const alertAlreadyTriggered = await checkAlertState();

      if (authUser) {
        if (authUser.emailVerified) {
          console.log("User verified: ", authUser);
          setUser(authUser);
          setIsVerified(true);
          await AsyncStorage.setItem('alertTriggered', 'false'); 
          router.push('/screens/HomeScreen'); 
        } else {
          
          if (!alertAlreadyTriggered) {
            alert("Email not verified, Redirecting...");
            await AsyncStorage.setItem('alertTriggered', 'true');
            sendEmailVerification(authUser)
              .then(() => alert("Email verification sent!"))
              .catch((error) => alert("Error sending verification email: " + error));
          }
          setUser(null);
          setIsVerified(false);
          router.push('/screens/SignUpPage'); 
        }
      } else {
        setUser(null);
        setIsVerified(false);
        await AsyncStorage.setItem('alertTriggered', 'false'); 
        router.push('/screens/SignUpPage');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen
          name="screens/SignUpPage"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/LoginPage"
          options={{headerShown: false}}/>
        <Stack.Screen
          name="screens/HomeScreen"
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
      </Stack>
    </>
  );
}
