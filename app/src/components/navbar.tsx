import { View, Pressable } from "react-native";
import { UserRound } from "lucide-react-native";
import { Link } from "expo-router";
import { useColorTheme } from "@/hooks/useColorTheme";
import { Text } from "../../lib/Text";

const Navbar = () => {
  const theme = useColorTheme();
  const isDark = theme === "dark";
  return (
    <View className="border-b border-t border-neutral-300 dark:border-white/10 py-5">
      <View className="flex-row justify-end px-3">
        <Link href="/login" asChild>
          <Pressable className="border not-dark:border-black dark:border-white/10 border-white/50 dark:bg-neutral-800  rounded-full p-2">
            <UserRound
              size={20}
              color={`${isDark ? "white" : "black"}`}
              strokeWidth={1.8}
            />
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default Navbar;