import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
//Components
import IncrementButton from './components/IncrementButton'

export default function App() {

  const getJson = async () => {
      const response = await fetch('https://devapi.inertia.systems/devtest/lunchspecials.php');
      const json = await response.json();
      console.log(json);
      return (json);
  }

  return (
    <View style={styles.container}>
      <IncrementButton/>
      <Button
        title = "test"
      />


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
