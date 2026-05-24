import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="bg-gray-300 flex-1 justify-center items-center">
      <View>
        <Text className="text-4xl font-bold ">init + native_wind_v4</Text>
        <Text className="text-2xl ">Root Layout</Text>
      </View>
    </SafeAreaView>
  );
}
