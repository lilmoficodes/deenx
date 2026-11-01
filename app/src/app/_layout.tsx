import { Stack } from "expo-router";
import "../../globals.css";
import { useColorTheme } from "@/hooks/useColorTheme";
import { useFonts } from "expo-font"
import { ActivityIndicator, View } from "react-native";
export default function RootLayout() {

  const [fontsLoaded, fontError] = useFonts({
    Satoshi: require("@/assets/fonts/Satoshi.otf"),
    Neue: require("@/assets/fonts/Neue.otf"),
    Uthmani: require("@/assets/fonts/Uthmani.otf"),
  })
  const theme = useColorTheme();

  if (fontError) {
    console.error("Font loading error:", fontError);
  }

  if (!fontsLoaded && !fontError) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black">
        <ActivityIndicator color="#888" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme === "dark" ? "black" : "white",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}