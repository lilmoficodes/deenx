import { useColorScheme } from "react-native";
export const useColorTheme = () : "light" | "dark" =>{
    const color = useColorScheme();
    if(color === "light")
    {
        return "light";
    }
    else if(color === "dark")
    {
        return "dark"
    }
    else return "light";
}