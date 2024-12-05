import React from "react";
import { View, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons"; 

const TrendingChallenge = ({ challengeName, description, id, icon }) => {
  return (
    <Link href={`/challenge/${id}`} asChild>
      <Pressable className="w-full bg-white border-gray-300 border-2 rounded-2xl flex flex-row mt-5 p-3">
        <View className="flex-1 justify-center">
          <Text className="text-2xl font-bold mb-2">{challengeName}</Text>
          <Text className="text-gray-600 mt-2 text-lg">{description}</Text>
        </View>

        {/* Ensure FontAwesome6 is not inside Text */}
        <FontAwesome6 name={icon} className="self-center ml-4" size={30} color="#2c3651" />
      </Pressable>
    </Link>
  );
};

export default TrendingChallenge;
