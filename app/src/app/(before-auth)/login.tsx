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

            <View className="px-2">
                <View  className="mt-12 flex flex-col gap-y-3 overflow-visible rounded-3xl  px-6 py-8
                    shadow-[-15px_0_65px_-20px_rgba(139,92,246,0.55),15px_0_65px_-20px_rgba(236,72,153,0.40),0_20px_90px_-15px_rgba(168,85,247,0.45)]
                    sm:px-8">
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
                    <TextInput className="w-full border-b border-neutral-700 dark:text-white not-dark:text-black" placeholder="Enter your password" placeholderTextColor={theme === "dark" ? "#888" : "#777"} />
                    <View className="items-center mt-5">
                        <Text>
                            Didn't have an account?{" "}<Link href={"/signup"} className="underline">Signup</Link>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}