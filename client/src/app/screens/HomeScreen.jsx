import { Text, View, ScrollView, SafeAreaView ,Pressable} from "react-native";
import ChallengeCard from '../../components/ChallengeCard';
import { Link } from "expo-router";
import { firebase_auth } from "../../../FirebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter();
  const user = firebase_auth.currentUser;
  const userName  = user?.displayName || "Guest";

  const handleLogout = async () => {
    try{
      await signOut(firebase_auth);
      router.push('/screens/SignUpPage')
    }catch(error){
      alert("Error occured while logging out: "+error)
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-darkMode">
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="flex flex-row mt-4  justify-between p-6">
          
          <Text className='text-white text-4xl font-bold'>12 Hours Hussle</Text>
          <Pressable onPress={handleLogout} asChild>
          <Text className='text-white mt-2'>Logout</Text>
           </Pressable>
        </View>
        <View className="mt-3 mb-4 ml-4">
          
          <Text className="text-2xl text-white font-bold">
            Good Morning {userName},
          </Text>
        </View>

        

        <View className="mt-6">
          <Text className="text-xl font-bold text-white ml-4">
            Trending Challenges
          </Text>
        </View >

        <View className="p-4">
        <ChallengeCard />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
