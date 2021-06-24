import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Colors } from '../utils';

// You can import from local files

// or any pure javascript modules available in npm

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.yellowDarker3,
    margin: 3,
    borderColor: 'red',
    borderWidth: 3,
    padding: 8,
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
  },

  textH1: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },

  textCenter: {
    textAlign: 'center',
  },

  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
});
