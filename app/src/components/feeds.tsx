import {
  View,
  ScrollView,
  Pressable,
} from "react-native";

import {
  Bookmark,
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react-native";

import Navbar from "./navbar";
import { SafeAreaView } from "../../lib/SafeAreaView";
import { Text } from "../../lib/Text";
import { useColorTheme } from "@/hooks/useColorTheme";
const Feeds = () => {
  const theme = useColorTheme();
  const isDark : boolean = theme === "dark";
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Navbar />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-7 px-2 gap-y-7 pb-7">

            {/* Post */}
            <View className="theme-utility border rounded-3xl py-4 md:max-w-2xl">

              {/* Post Header */}
              <View className="flex-row items-center justify-between px-3 border-b theme-utility pb-2">

                <View className="flex-row items-center gap-x-2 py-2">
                  <View className="h-10 w-10 rounded-full theme-utility border" />

                  <View>
                    <Text className="text-black dark:text-white">
                      Mafijur Ali
                    </Text>

                    <Text className="text-sm text-neutral-600 dark:text-neutral-400">
                      @mafijurali
                    </Text>
                  </View>
                </View>

                <View className="flex-row gap-x-2 items-center">
                  <Text className="text-xs font-semibold">
                    {new Date().getFullYear()}
                  </Text>

                  <Ellipsis
                    size={20}
                    color="#a3a3a3"
                  />
                </View>
              </View>

              {/* Post Content */}
              <View className="p-3 mt-2 border-b theme-utility">
                <View className="rounded-xl p-1">
                  <Text className="text-black dark:text-white leading-6">
                    As Salamu Walaikum, I hope everyone is fine hah Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis maxime iusto vel beatae recusandae id repellat
                    natus inventore quas aliquam impedit, illo iste harum
                    accusamus consequatur soluta ab, nam delectus.
                  </Text>
                </View>
              </View>

              {/* Post Actions */}
              <View className="flex-row items-center justify-between px-3 mt-3">

                <View className="flex-row items-center gap-x-5">

                  {/* Like */}
                  <Pressable className="flex-row items-center gap-x-2">
                    <Heart
                      size={20}
                      color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />

                    <Text className="text-sm">
                      24
                    </Text>
                  </Pressable>

                  {/* Comments */}
                  <Pressable className="flex-row items-center gap-x-2">
                    <MessageCircle
                      size={20}
                      color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />

                    <Text className="text-sm">
                      8
                    </Text>
                  </Pressable>

                  {/* Repost */}
                  <Pressable>
                    <Repeat2
                      size={24}
                       color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.9}
                    />
                  </Pressable>

                  {/* Share */}
                  <Pressable>
                    <Send
                      size={20}
                       color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />
                  </Pressable>

                </View>

                {/* Bookmark */}
                <Pressable>
                  <Bookmark
                    size={20}
                    color={`${isDark ? "#a3a3a3" : "#000000"}`}
                    strokeWidth={1.8}
                  />
                </Pressable>

              </View>
            </View>
            {/* Post */}
            <View className="theme-utility border rounded-3xl py-4 md:max-w-2xl">

              {/* Post Header */}
              <View className="flex-row items-center justify-between px-3 border-b theme-utility pb-2">

                <View className="flex-row items-center gap-x-2 py-2">
                  <View className="h-10 w-10 rounded-full theme-utility border" />

                  <View>
                    <Text className="text-black dark:text-white">
                      Mafijur Ali
                    </Text>

                    <Text className="text-sm text-neutral-600 dark:text-neutral-400">
                      @mafijurali
                    </Text>
                  </View>
                </View>

                <View className="flex-row gap-x-2 items-center">
                  <Text className="text-xs font-semibold">
                    {new Date().getFullYear()}
                  </Text>

                  <Ellipsis
                    size={20}
                    color="#a3a3a3"
                  />
                </View>
              </View>

              {/* Post Content */}
              <View className="p-3 mt-2 border-b theme-utility">
                <View className="rounded-xl p-1">
                  <Text className="text-black dark:text-white leading-6">
                    As Salamu Walaikum, I hope everyone is fine hah Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis maxime iusto vel beatae recusandae id repellat
                    natus inventore quas aliquam impedit, illo iste harum
                    accusamus consequatur soluta ab, nam delectus.
                  </Text>
                </View>
              </View>

              {/* Post Actions */}
              <View className="flex-row items-center justify-between px-3 mt-3">

                <View className="flex-row items-center gap-x-5">

                  {/* Like */}
                  <Pressable className="flex-row items-center gap-x-2">
                    <Heart
                      size={20}
                      color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />

                    <Text className="text-sm">
                      24
                    </Text>
                  </Pressable>

                  {/* Comments */}
                  <Pressable className="flex-row items-center gap-x-2">
                    <MessageCircle
                      size={20}
                      color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />

                    <Text className="text-sm">
                      8
                    </Text>
                  </Pressable>

                  {/* Repost */}
                  <Pressable>
                    <Repeat2
                      size={24}
                       color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.9}
                    />
                  </Pressable>

                  {/* Share */}
                  <Pressable>
                    <Send
                      size={20}
                       color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />
                  </Pressable>

                </View>

                {/* Bookmark */}
                <Pressable>
                  <Bookmark
                    size={20}
                    color={`${isDark ? "#a3a3a3" : "#000000"}`}
                    strokeWidth={1.8}
                  />
                </Pressable>

              </View>
            </View>
            {/* Post */}
            <View className="theme-utility border rounded-3xl py-4 md:max-w-2xl">

              {/* Post Header */}
              <View className="flex-row items-center justify-between px-3 border-b theme-utility pb-2">

                <View className="flex-row items-center gap-x-2 py-2">
                  <View className="h-10 w-10 rounded-full theme-utility border" />

                  <View>
                    <Text className="text-black dark:text-white">
                      Mafijur Ali
                    </Text>

                    <Text className="text-sm text-neutral-600 dark:text-neutral-400">
                      @mafijurali
                    </Text>
                  </View>
                </View>

                <View className="flex-row gap-x-2 items-center">
                  <Text className="text-xs font-semibold">
                    {new Date().getFullYear()}
                  </Text>

                  <Ellipsis
                    size={20}
                    color="#a3a3a3"
                  />
                </View>
              </View>

              {/* Post Content */}
              <View className="p-3 mt-2 border-b theme-utility">
                <View className="rounded-xl p-1">
                  <Text className="text-black dark:text-white leading-6">
                    As Salamu Walaikum, I hope everyone is fine hah Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis maxime iusto vel beatae recusandae id repellat
                    natus inventore quas aliquam impedit, illo iste harum
                    accusamus consequatur soluta ab, nam delectus.
                  </Text>
                </View>
              </View>

              {/* Post Actions */}
              <View className="flex-row items-center justify-between px-3 mt-3">

                <View className="flex-row items-center gap-x-5">

                  {/* Like */}
                  <Pressable className="flex-row items-center gap-x-2">
                    <Heart
                      size={20}
                      color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />

                    <Text className="text-sm">
                      24
                    </Text>
                  </Pressable>

                  {/* Comments */}
                  <Pressable className="flex-row items-center gap-x-2">
                    <MessageCircle
                      size={20}
                      color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />

                    <Text className="text-sm">
                      8
                    </Text>
                  </Pressable>

                  {/* Repost */}
                  <Pressable>
                    <Repeat2
                      size={24}
                       color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.9}
                    />
                  </Pressable>

                  {/* Share */}
                  <Pressable>
                    <Send
                      size={20}
                       color={`${isDark ? "#a3a3a3" : "#000000"}`}
                      strokeWidth={1.8}
                    />
                  </Pressable>

                </View>

                {/* Bookmark */}
                <Pressable>
                  <Bookmark
                    size={20}
                    color={`${isDark ? "#a3a3a3" : "#000000"}`}
                    strokeWidth={1.8}
                  />
                </Pressable>

              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Feeds;