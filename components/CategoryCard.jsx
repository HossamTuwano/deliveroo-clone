import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryCard({ imgUri, title }) {
  return (
    <TouchableOpacity className="mr-3 relative">
      <Image
        source={{
          uri: imgUri,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
