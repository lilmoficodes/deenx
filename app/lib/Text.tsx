import { useColorTheme } from "@/hooks/useColorTheme";
import {styled} from "nativewind";
import  {Text as RNText} from "react-native";
const StyledText = styled(RNText);
export const Text = ({className="", ...props} : React.ComponentProps<typeof RNText> & {className? : string}) => {
    const theme = useColorTheme();
    const textColor = theme === "dark" ? "text-white" : "text-black"
   return (
    <StyledText {...props} className={`${textColor} ${className}`}/>
   )
}