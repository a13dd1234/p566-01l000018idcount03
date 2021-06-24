import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonMain from '../PersonMain/PersonMain';
// Styles:
import { defaultStyles } from '../../styles';
import mainStyles from './mainStyles';

const styles = { ...defaultStyles, ...mainStyles };

export default function Main({ Person1, Person2, idCountHandler }) {
    const id = idCountHandler()
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.textH1}>Main Content</Text>
        <PersonMain
          Person1={Person1}
          Person2={Person2}
          id={id}
        />
      </ScrollView>
    </View>
  );
}
//  Person1={Person1} Person2={Person2} idCountHandler={idCountHandler}
