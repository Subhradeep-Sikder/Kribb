import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "@clerk/expo";

export default function Profile() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        className="mt-4 px-4 py-2 bg-red-500 rounded-xl"
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
