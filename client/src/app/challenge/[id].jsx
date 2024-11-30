import React, { useState, useEffect } from "react";
import { useLocalSearchParams,useRouter } from "expo-router";
import { View, Text, Image, Pressable,Button ,SafeAreaView} from "react-native";
import { ChevronLeft, Fullscreen } from "lucide-react-native";
import { YellowBox } from "react-native-web";

const ChallengeScreen = () => {
  const { id } = useLocalSearchParams();
  const [mongoData, setMongoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();


  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/challenges/trending`);
      const data = await response.json();
      setMongoData(data);
    } catch (err) {
      console.error("Error fetching data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="flex flex-col">
        <Text className="self-center mt-11 font-bold text-2xl">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex flex-col">
        <Text className="self-center mt-11 text-red-500 text-xl">Error: {error}</Text>
      </View>
    );
  }

  const challenge = mongoData?.find((c) => c.id === id);

  if (!challenge) {
    return (
      <View className="flex flex-row justify-center ">
        <Text className="self-center mt-20 text-gray-700  font-bold flex-col  text-xl">
          Challenge not found!
        </Text>
      </View>
    );
  }

  return (
    <View className="p-5 bg-darkMode">
      <View className="flex flex-row mt-16">

      <View className="flex flex-row items-center mb-5">
        <Pressable onPress={() => router.back()} className="mr-3">
          <ChevronLeft size={29} color="#000" />
        </Pressable>
        <Text className="text-2xl font-bold flex-shrink">{challenge.challengeName}</Text>
      </View>
      
      
      

      <View>
    
      </View>
      </View>
    

      {/* Challenge Image */}
      <Image
        source={{ uri: challenge.img }}
        style={{ width: "100%", height: 300, borderRadius: 10 }}
      />

      {/* Challenge Details */}
      <Text className="mt-5 text-center text-lg font-semibold">
        Start a {challenge.challengeName}
      </Text>

    <View className="mt-9 ">
      <Text className="text-center font-bold text-xl">Plan, Break, and Hustle: Your 12-Hour Challenge Journey</Text>
      <View className="gap-4 mt-4"> 
      <Text className="text-lg">• Name your challenge to give it a clear purpose.</Text>
      <Text className="text-lg">• List your subtasks and assign a specific time for each.</Text>
      <Text className="text-lg">• Plan your breaks—during long tasks or after completing a few subtasks.</Text>
      <Text className="text-lg">• Schedule your session and break timings to stay on track.</Text>
      <Text className="text-lg">• Once everything is set, start your challenge and give it your best shot!</Text>
      </View>
    </View>
    <View>

      

    </View>
    <View className="m-10 border-2 border-black  w-auto h-auto">
        <Button title="Start your challenge" color={YellowBox}> </Button>
      </View>

    </View>
  );
};

export default ChallengeScreen;