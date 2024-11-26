import { StyleSheet, Text, View,StatusBar, Button,Alert,SafeAreaView, ScrollView} from "react-native";
import ChallengeCard from '../components/ChallengeCard'


export default function Page() {
  return (
    <SafeAreaView className="">
    <View className="mt-2 p-4">
      <Text className="text-3xl font-bold ">Good Morning Pradnyesh,</Text>

    <View>
    <Text className="text-center  pt-8 ">Success is not final, failure is not fatal: It is the courage to continue that counts.</Text>
    </View>
    <View>
     <Text className="text-3xl mt-10 "> Trending Challenges </Text>
    </View>
    <ScrollView>

    <ChallengeCard/>
    <View></View>
    </ScrollView>

   
     

     
      
   

    </View>
    </SafeAreaView>
  )
}

