import { StyleSheet, Text, View,StatusBar, Button,Alert} from "react-native";

export default function Page() {
  const hello = () => {
    Alert.alert("You can't stop the timer")
  }
  return (

    <View className="">
      <StatusBar />
      <View className="ml-2 ">
        <View className="grid grid-cols-5">
      <Button className="grid col-start-5 thumb-rose-800" onPress={hello} color="#841584" title="Hello"/>
      </View>
      
        <Text className="text-5xl font-bold" >Hello World</Text>
        <Text>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

