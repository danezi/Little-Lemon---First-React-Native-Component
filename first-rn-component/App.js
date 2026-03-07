import * as React from 'react'; 
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#495E57' }}>
      <LittleLemonHeader />
      <View style={{ flex: 1 }} />
      <LittleLemonFooter />
    </View>
  );
}