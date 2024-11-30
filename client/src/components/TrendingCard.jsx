import React from "react";
import { View,Pressable, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";

const TrendingChallenge = ({ challengeName, description, img ,id}) => {


  return (
    <Link href={`/challenge/${id}`} asChild>
      <Pressable  className="w-full bg-white border-gray-300 border-2 rounded-2xl flex flex-row mt-5 p-3">
        <View className="flex-1 justify-center">
          <Text className="text-2xl font-bold mb-2">{challengeName}</Text>
          <Text className="text-gray-600 mt-2 text-lg">{description}</Text>
        </View>
        

        <Image
          source={{ uri: img }}
          className="w-24 h-24 self-center"
        />
      </Pressable>
      </Link>
  );
};

export default TrendingChallenge;
