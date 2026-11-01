import { HomeIcon, MessageCircle, PlusSquare, Search, UserRound } from "lucide-react-native"
import { View } from "react-native"
import { Text } from "../../lib/Text"
import { useColorTheme } from "@/hooks/useColorTheme"
import { SafeAreaView } from "../../lib/SafeAreaView"
const Footer = () => {
    const theme = useColorTheme();
    const isDark: boolean = theme === "dark";
    return (
        <SafeAreaView>
            <View className="px-2">
                <View className={`backdrop-blur-sm theme-utility border rounded-2xl ${isDark && "shadow-[0px_0px_20px_1px_#404040]"} w-full justify-center`}>
                    <View className="flex-row justify-center gap-x-8 p-3">
                        <Text className="cursor-pointer"><HomeIcon color={`${isDark ? "#a3a3a3" : "#000"}`} /></Text>
                        <Text className="cursor-pointer"><MessageCircle color={`${isDark ? "#a3a3a3" : "#000"}`} /></Text>
                        <Text className="cursor-pointer"><PlusSquare color={`${isDark ? "#a3a3a3" : "#000"}`} /></Text>
                        <Text className="cursor-pointer"><Search color={`${isDark ? "#a3a3a3" : "#000"}`} /></Text>
                        <Text className="cursor-pointer"><UserRound color={`${isDark ? "#a3a3a3" : "#000"}`} /></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Footer