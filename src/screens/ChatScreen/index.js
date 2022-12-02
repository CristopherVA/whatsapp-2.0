import React, { useEffect } from 'react'
import { ImageBackground, FlatList, KeyboardAvoidingView } from 'react-native'
import Message from '../../components/Message'
import bg from '../../../assets/images/BG.png'
import messages from '../../../assets/data/messages.json'
import InputBox from '../../components/InputBox'
import { useForm } from 'react-hook-form'
import { useRoute, useNavigation } from '@react-navigation/native'


const ChatScreen = () => {

   const { handleSubmit, control, watch, reset } = useForm();
   const route = useRoute();
   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({ title: route.params.name });
   }, [route.params.name])


   const onSend = data => {
      console.warn(data)
      reset()
   }

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? "padding" : "height"}
         keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
         source={bg}
         className="flex-1 w-full"
      >
         <ImageBackground
            source={bg}
            className="flex-1 w-full"
         >
            <FlatList
               className='p-[10px]'
               data={messages}
               renderItem={({ item }) => <Message message={item} />}
               inverted
            />

            <InputBox control={control} name="text" handleSubmit={handleSubmit} onSend={onSend} />
         </ImageBackground>
      </KeyboardAvoidingView>
   )
}

export default ChatScreen