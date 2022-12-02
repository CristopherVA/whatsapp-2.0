import { View, Text, FlatList } from 'react-native'
import React from 'react'
import chats from '../../../assets/data/chats.json'
import ContactListItem from '../../components/ContactListItem'

const ContactScreen = () => {
  return (
    <FlatList
      className="w-full"
      data={chats}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  )
}

export default ContactScreen