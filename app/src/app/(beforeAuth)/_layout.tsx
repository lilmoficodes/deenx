import { useColorTheme } from '@/hooks/useColorTheme'
import { Stack } from 'expo-router'
const LoginSignupLayout = () => {
    const theme = useColorTheme();
    return <Stack screenOptions={{
        headerShown: false,
         contentStyle: {
            backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
        },
    }} />
}

export default LoginSignupLayout