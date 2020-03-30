import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, AsyncStorage} from 'react-native';
//Components
import IncrementButton from '../components/IncrementButton'

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("LunchSpecials")
  }
  
  return (
    <View style={styles.container}>

      <IncrementButton/>
      <Button
        title = "Lunch Specials"
        onPress={pressHandler}
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
