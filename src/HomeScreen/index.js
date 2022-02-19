import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as countActions from '../../actions/countActions';
import * as usersActions from '../../actions/usersActions';

const demoUser = {
  id: 1,
  name: 'sagar',
  address: 'pawar',
};

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.countNumber);

  const onIncrease = () => {
    dispatch(countActions.incrementCount());
  };

  const onDecrease = () => {
    dispatch(countActions.decrementCount());
  };

  const onAddUser = () => {
    dispatch(usersActions.addUser(demoUser));
  };

  const onRemoveUser = () => {
    dispatch(usersActions.removeUser(1));
  };

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => onIncrease()} />
      <Text style={styles.textCenter}>{count}</Text>
      <Button title="Decrement" onPress={() => onDecrease()} />

      <Button title="Add User" onPress={() => onAddUser()} />
      <Button title="Remove User" onPress={() => onRemoveUser()} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  userButtonStyle: {
    backgroundColor: 'red',
    top: 25,
  },
});
