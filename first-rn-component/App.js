import * as React from 'react'; 
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#495E57' }}>
      <LittleLemonHeader />
      <View style={{ flex: 1 }}>
        <WelcomeScreen />
      </View>
      <LittleLemonFooter />
    </View>
  );
}