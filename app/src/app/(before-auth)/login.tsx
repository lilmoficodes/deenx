import { TextInput, View } from "react-native";
import { SafeAreaView } from "../../../lib/SafeAreaView";
import { Text } from "../../../lib/Text";
import { useColorTheme } from "@/hooks/useColorTheme";
import { Link } from "expo-router";

export default function Index() {
    const theme = useColorTheme();

    return (
        <SafeAreaView>
            <View className="mt-9 items-center">
                <Text className="text-5xl font-neue">
                    deenx
                </Text>

                <Text className="mt-3 text-3xl">
                    The Digital Islamic Hub
                </Text>

                <Text className="mt-3 text-2xl">
                    There is more islam than you know
                </Text>
            </View>

            <View className="mt-10 px-6">
                <Text className="mb-2 text-lg">
                    Email
                </Text>

                <TextInput
                    className="w-full border-b border-neutral-700 dark:text-white not-dark:text-black:"
                    placeholder="Enter your email"
                    placeholderTextColor={
                        theme === "dark" ? "#888" : "#777"
                    }
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text className="mt-2">
                    Password
                </Text>
                <TextInput className="w-full border-b border-neutral-700 dark:text-white not-dark:text-black" placeholder="Enter your password" placeholderTextColor={theme === "dark" ? "#888" : "#777"}/>
                <View className="items-center mt-5">
                    <Text>
                        Didn't have an account?{" "}<Link href={"/signup"} className="underline">Signup</Link>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}