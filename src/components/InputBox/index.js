import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Controller } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'


const InputBox = ({ control, name, handleSubmit, onSend }) => {
   return (
      <SafeAreaView edges={['bottom']} className="flex-row bg-gray-100 p-2 items-center">
         {/* Icon */}
         <AntDesign name="plus" size={24} color="royalblue" />
         {/* Text Input */}
         <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  className="flex-1 bg-white rounded-full p-2 mx-2 text-[16px]"
                  style={[{
                     borderWidth: StyleSheet.hairlineWidth,
                     borderColor: 'lightgray',
                  }]}
                  placeholder='type your message'
               />
            )}
         />
         {/* Icon */}
         <MaterialIcons
            onPress={handleSubmit(onSend)}
            name="send"
            size={20}
            color="white"
            style={[{
               backgroundColor: 'royalblue',
               padding: 7,
               borderRadius: 20,
               overflow: 'hidden',
            }]} />
      </SafeAreaView>
   )
}

export default InputBox