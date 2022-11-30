import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ChatListItem from '../../components/ChatListItem'
import chats from '../../../assets/data/chats.json'

const ChatsScreen = () => {
   return (
      <>
         <FlatList
            className="w-full"
            data={chats}
            renderItem={({ item }) => <ChatListItem chat={item} />}
         />
      </>
   )
}

export default ChatsScreen