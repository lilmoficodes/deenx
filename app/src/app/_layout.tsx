import { Stack } from "expo-router";
import "../../globals.css";
import { useColorTheme } from "@/hooks/useColorTheme";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Satoshi: require("@/assets/fonts/_satoshi_k9ut_i_reg.otf"),
    Neue: require("@/assets/fonts/_neue_687hK11_reg.otf"),
    Uthmani: require("@/assets/fonts/_uthmani_643_hafs_v18.otf"),
  });

  const theme = useColorTheme();

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme === "dark" ? "black" : "white",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="(before-auth)/login" />
    </Stack>
  );
}