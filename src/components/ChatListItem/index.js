import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useNavigation } from '@react-navigation/native'
import { roundToNearestPixel } from 'nativewind'
dayjs.extend(relativeTime)


const ChatListItem = ({chat}) => {

  const navigation = useNavigation()
  

  return (
    <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })} className="flex flex-row my-[1px] ">
      <View className="mx-4">
        <Image
          source={{ uri: chat.user.image }}
          className="w-[60px] h-[60px] bg-red-600 rounded-full"
        />
      </View>
      <View className="flex-1 h-[70px] border-gray-200  border-b-[1px]">
        <View className="flex-row items-center justify-between pr-2 ">
          <Text numberOfLines={1} className=" text-xl font-bold">{chat.user.name}</Text>
          <Text className="text-lg text-gray-400">{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text numberOfLines={2} className="text-gray-400 text-md  pr-4">{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  )
}

export default ChatListItem