import { StyleSheet, Text, View,StatusBar, Button,Image,Alert,SafeAreaView, ScrollView} from "react-native";
import ChallengeCard from '../components/ChallengeCard'


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-darkMode">
    <View className="mt-2 p-4">
      <Text className="text-3xl font-bold ">Good Morning Pradnyesh,</Text>

    <View>
    <Text className="text-center  pt-8 ">Success is not final, failure is not fatal: It is the courage to continue that counts.</Text>
    </View>
    <View>
     <Text className="text-3xl mt-10 font-bold"> Trending Challenges </Text>
    </View>
    <ScrollView>

    <ChallengeCard/>
    <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>
        <View><Text className="text-slate-100">dsasdas</Text></View>


    </ScrollView>

   
     

     
      
   

    </View>
    </SafeAreaView>
  )
}

