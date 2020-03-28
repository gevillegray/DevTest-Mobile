import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IncrementButton from './components/IncrementButton'

export default function App() {
  return (
    <View style={styles.container}>
      <IncrementButton />
    </View>
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
