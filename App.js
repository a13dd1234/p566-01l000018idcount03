import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import MyApp from './components/MyApp/MyApp'

// Styles:
import { defaultStyles } from './styles';

const styles = { ...defaultStyles };

export default function App() {
  return (
    <View style={styles.container}>
      <MyApp />
    </View>
  );
}
