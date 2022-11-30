import { View, Text } from 'react-native'
import React from 'react'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Message = ({ message }) => {

   const isMyMessage = () => {
      return message.user.id === 'u1'
   }

   return (
      <View
         className='max-w-[80%] bg-white m-1 p-2 rounded-lg shadow'
         style={[{
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
            backgroundColor: isMyMessage() ? '#dcf8c5' : 'white'
         }]}>
         <Text>{message.text}</Text>
         <Text style={{ alignSelf: 'flex-end' }} className="text-gray-500">{dayjs(message.createdAt).fromNow(true)}</Text>
      </View>
   )
}

export default Message