import * as React from 'react';
import { Text, View, TextInput } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files

// Styles:
import { defaultStyles } from '../../styles';
import personUpdateFormStyles from './personUpdateFormStyles';

const styles = { ...defaultStyles, ...personUpdateFormStyles };

export default function PersonUpdateForm({ onChangeTextHandler }) {
  return (
    <View style={styles.personUpdateFormContainer}>
      <Text>New Person</Text>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeTextHandler([1, val])}
        placeholder="Person Name"
      />
      <Text>Age</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeTextHandler([0, val])}
        placeholder="Person Age"
      />
    </View>
  );
}