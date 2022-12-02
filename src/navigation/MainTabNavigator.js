import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import NotImplementedScreen from '../screens/NotImplementedScreen';
import { Ionicons, Entypo } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
   return (
      <Tab.Navigator
         initialRouteName='Chats'
         screenOptions={{
            tabBarStyle: { backgroundCOlor: 'whitesmoke' },
            headerStyle: { backgroundColor: 'whitesmoke' }
         }}  >
         <Tab.Screen
            name="Status"
            component={NotImplementedScreen}
            options={{ tabBarIcon: ({ size, color }) => (<Ionicons color={color} size={size} name="logo-whatsapp" />) }}
         />
         <Tab.Screen
            name="Calls"
            component={NotImplementedScreen}
            options={{ tabBarIcon: ({ size, color }) => (<Ionicons color={color} size={size} name="call-outline" />) }}
         />
         <Tab.Screen
            name="Camera"
            component={NotImplementedScreen}
            options={{ tabBarIcon: ({ size, color }) => (<Ionicons color={color} size={size} name="camera-outline" />) }}
         />
         <Tab.Screen
            name="Chats"
            component={ChatsScreen}
            options={({ navigation }) => ({
               tabBarIcon: ({ size, color }) => (<Ionicons color={color} size={size} name="ios-chatbubbles-sharp" />),
               headerRight: () => (
                  <Entypo onPress={() => navigation.navigate("Contacts")} name="new-message" size={18} color={"royalblue"} style={{ marginRight: 15 }} />
               ),
               headerLeft: () => (
                  <View className="ml-3">
                     <Text className="text-lg text-blue-700">Edit</Text>
                  </View>
               ),

            })}
         />
         <Tab.Screen
            name="Settings"
            component={NotImplementedScreen}
            options={{ tabBarIcon: ({ size, color }) => (<Ionicons color={color} size={size} name="settings-outline" />) }}
         />
      </Tab.Navigator>
   )
}
export default MainTabNavigator