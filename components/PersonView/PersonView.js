import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files

// Styles:
import { defaultStyles } from '../../styles';
import personViewStyles from './personViewStyles';

const styles = { ...defaultStyles, ...personViewStyles };

export default function PersonView({ person }) {
    console.log("x",person);
  return (
    <View style={styles.personViewContainer}>
      <Text>person ID: {person.id}</Text>
      <Text>Name : {person.name}</Text>
      <Text>Age : {person.age}</Text>
    </View>
  );
}
// Person1={Person1} Person2={Person2}
