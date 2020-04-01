import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, AsyncStorage} from 'react-native';
import IncrementButton from './components/IncrementButton'
import Navigator from './routes/homeStack';

export default function App() {
  console.disableYellowBox = true;
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
