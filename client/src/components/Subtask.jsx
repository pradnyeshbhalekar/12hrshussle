import { useState } from 'react'
import {View,Text,TextInput,Pressable} from 'react-native'
import {ChevronLeft} from 'lucide-react-native'
import { useNavigation } from 'expo-router'

const Subtask = () => {
    const [challengeName,setChallengeName] = useState('');
    const router = useNavigation();
    


    
    return(
        <View className="p-5 bg-darkMode ">
         <View className="flex flex-row mt-16">

<View className="flex flex-row items-center mb-5">
                <Pressable onPress={()=>{router.goBack()}} className="mr-3">
                <ChevronLeft size={29} color={"#FFF"} />
                </Pressable>
            <Text className="font-bold text-2xl flex-shrink text-white">Challenge Setup</Text>
            </View>
            </View>
   
     
        <View className="flex flex-col col-start-2 gap-5 mt-10">
            <Text className="self-center text-2xl font-bold text-white">Enter Your Challenge Name:</Text>
            <TextInput placeholder='Enter Name' placeholderTextColor="#888888" className="font-bold text-xl text-gray-300 self-center x" onChangeText={(text)=>setChallengeName(text)}></TextInput>
        </View>
        </View>
    )
}

export default Subtask;