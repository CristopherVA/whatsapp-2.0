import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigator from './src/navigation';

import { Amplify } from 'aws-amplify';
import config from '.'

export default function App() {
  return (
    <View className="flex-1" style={{ backgroundColor: 'whitesmoke'}}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
``

