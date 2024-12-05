import { Text, View, ScrollView, SafeAreaView } from "react-native";
import ChallengeCard from '../../components/ChallengeCard';
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-darkMode">
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="flex flex-row mt-4  justify-between p-6">
          
          <Text className='text-white text-4xl font-bold'>12 Hours Hussle</Text>
          <Link href="/screens/LoginPage" asChild>
          <Text className='text-white mt-2'>Login</Text>
           </Link>
        </View>
        <View className="mt-3 mb-4 ml-4">
          
          <Text className="text-2xl text-white font-bold">
            Good Morning Pradnyesh,
          </Text>
        </View>

        

        <View className="mt-6">
          <Text className="text-xl font-bold text-white ml-4">
            Trending Challenges
          </Text>
        </View >

        <View >
        <ChallengeCard />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
