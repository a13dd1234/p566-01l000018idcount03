import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import Header from '../Header/Header'
import Main from '../Main/Main'

// Fake Data:
import { Person1, Person2 } from '../../FakeData'
let idCount = 3
const idCountHandler = () => {
  return idCount++
  }
  

// Styles:
import { defaultStyles } from '../../styles';
import myAppStyles from './myAppStyles'

const styles = { ...defaultStyles, ...myAppStyles };

export default function MyApp() {
  return (
    <View style={styles.myAppContainer}>
      <Header />
      <Main Person1={Person1} Person2={Person2} idCountHandler={idCountHandler} />
    </View>
  );
}

//  Person1={Person1} Person2={Person2} idCountHandler={idCountHandler} 
