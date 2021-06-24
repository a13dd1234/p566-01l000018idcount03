import * as React from 'react';
import { useState } from 'react';
import { Text, View, Button } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonView from '../PersonView/PersonView';
import PersonUpdateForm from '../PersonUpdateForm/PersonUpdateForm';

// Styles:
import { defaultStyles } from '../../styles';
import personMainStyles from './personMainStyles';

const styles = { ...defaultStyles, ...personMainStyles };

export default function PersonMain({ Person1, Person2, id }) {
  console.log("id: ", id)
  const [person, setPerson] = useState(Person1);
  const personUpdateHandler = () => {
    person.id == 1 ? setPerson(Person2) : setPerson(Person1);
  };
  const onChangeTextHandler = (info) => {
    info[0] ? setPerson({ id: id, name: info[1], age: person.age })
      : setPerson({ id: id, name: person.name, age: info[1] });
  };

  return (
    <View style={styles.personMainContainer}>
      <View style={styles.personMainContainer}>
        <Text style={styles.textH1}>Person Main View Info</Text>
        <PersonView person={{ ...person }} />
        <Button
          onPress={personUpdateHandler}
          title="switch / reset person"
          color="#841584"
          accessibilityLabel=""
        />
      </View>
      <View style={styles.personMainContainer}>
        <PersonUpdateForm onChangeTextHandler={onChangeTextHandler} id={id} />
      </View>
    </View>
  );
}
// Person1={Person1} Person2={Person2} idCountHandler={idCountHandler}
// 

