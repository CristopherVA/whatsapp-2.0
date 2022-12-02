import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useNavigation } from '@react-navigation/native'
import { roundToNearestPixel } from 'nativewind'
dayjs.extend(relativeTime)


const ContactListItem = ({user}) => {

  const navigation = useNavigation()
  

  return (
    <Pressable onPress={() => navigation.navigate('user', { id: user.id, name: user.name })} className="flex flex-row my-[1px] ">
      <View className="mx-4">
        <Image
          source={{ uri: user.image }}
          className="w-[60px] h-[60px] bg-red-600 rounded-full"
        />
      </View>
      <View className="flex-1 justify-center h-[70px] border-gray-200  border-b-[1px]">
        <View className="flex-column align-center pr-2 ">
          <Text numberOfLines={1} className=" text-xl font-bold">{user.name}</Text>
          <Text className="text-gray-400">{user.status}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ContactListItem