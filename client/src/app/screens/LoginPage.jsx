import {View,Text,Pressable,TextInput,Button} from 'react-native';
import {ChevronLeft} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import { useState } from 'react';
import { firebase_auth } from '../../../FirebaseConfig'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const LoginPage = () => {
    const router = useRouter()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const auth = firebase_auth;

    const signIn = async ()  => {
        setLoading(true)
        try{
            const response = await createUserWithEmailAndPassword(auth,email,password)
            console.log(response)
        } catch(error){
            alert("Error occured: "+error.message);
        }finally{
            setLoading(false)
        }
    }

    

    return(
        <View className="flex-1 bg-darkMode p-5">
            <View className="flex flex-row mt-16 items-center">
            <Pressable onPress={()=>{router.back()}} className="mr-3">
            <ChevronLeft size={29} color={"#FFFF"}/>
            </Pressable>
            <Text className='text-2xl font-bold color-white flex-shrink '>Login Page</Text>
            </View>
            <View className="flex self-center  mt-28  ">
            <Text className="text-3xl text-white font-semibold">Login </Text>
            </View>
            <View className='flex flex-col self-center mt-10'>
                <TextInput placeholder='Enter your email ' value={email} className="text-white mt-2 p-5 border-gray-500 border-2 rounded-xl " onChangeText={(text)=>{setEmail(text)}} placeholderTextColor={"gray"} autoCapitalize='none' />
                <TextInput placeholder='Enter your password' value={password} secureTextEntry placeholderTextColor={"gray"} onChangeText={(text)=>{setPassword(text)}} className="text-white mt-6 p-5 border-2 border-gray-500 w-96 rounded-xl" />
        </View>
                <View className="mt-5 p-2 w-48 flex self-center rounded-xl border-2 border-gray-500 mb-5">
                <Button title='Login' onPress={signIn} color={"#FFF"}/>
                </View>
                <Text className="text-white self-center ">New user?   <Link href="/screens/StartChallenge" className='text-blue-500'>SignUp</Link></Text>
                </View>
    )
}

export default LoginPage;