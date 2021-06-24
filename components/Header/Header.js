import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files

// Styles:
import { defaultStyles } from '../../styles';
import headerStyles from './headerStyles'

const styles = { ...defaultStyles, ...headerStyles };

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textH1}>Hello, World!</Text>
    </View>
  );
}
