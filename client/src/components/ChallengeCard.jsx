import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import TrendingCard from "../components/TrendingCard";

const ChallengeCard = () => {
  const [trendingChallenge, setTrendingChallenge] = useState([]);
  const [loading, setLoading] = useState(true);

  const featchTrendingChallenge = async () => {
    try {
      const response = await fetch(`http://localhost:5000/challenges/trending`);
      const data = await response.json();
      setTrendingChallenge(data);
    } catch (error) {
      console.log("Error fetching challenges:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    featchTrendingChallenge();
  }, []); // Dependency array to prevent infinite re-renders

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  

  return (
    <ScrollView className="flex-1">
      <View className="flex-1">
        {trendingChallenge.map((challenge, index) => (
          <TrendingCard
            key={index}
            challengeName={challenge.challengeName}
            description={challenge.description}
            img={challenge.img}
            id={challenge.id}
            icon={challenge.icon}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ChallengeCard;
