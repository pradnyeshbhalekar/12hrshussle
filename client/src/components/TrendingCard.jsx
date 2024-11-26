import React from "react";
import { View, Text, Image } from "react-native";

const TrendingChallenge = ({ challengeName, description, img }) => {
  return (
    <View className="w-full h-40 bg-white border-gray-300 border-2 rounded-lg flex flex-row mt-5 p-3">
     
      <View className="flex-1 justify-center">
        <Text className="text-xl font-bold mb-2">{challengeName}</Text>
        <Text className="text-gray-600">{description}</Text>
      </View>

   
      <Image
        source={{ uri: img }}
        className="w-24 h-24  self-center"
      />
    </View>
  );
};

export default TrendingChallenge;
