import { StyleSheet } from 'react-native';

import { Colors } from '../../utils';

// You can import from local files

// or any pure javascript modules available in npm

export default StyleSheet.create({
  personUpdateFormContainer: {
    backgroundColor: Colors.yellowLight,
    margin: 3,
    borderColor: 'red',
    borderWidth: 3,
    padding: 8,
  },
  personViewContent: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },});
