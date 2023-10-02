import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
