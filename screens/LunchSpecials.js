import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput, StyleSheet, Button} from 'react-native';

export default LunchSpecials = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var headTable = ['id', 'name', 'dish'];

  useEffect(() => {
    fetch('https://devapi.inertia.systems/devtest/lunchspecials.php')
      .then((response) => response.json())
      .then((json) => setData(json.body.lunchspecials))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TextInput
            style={styles.textInputStyle}
            // onChangeText={text => this.SearchFilterFunction(text)}
            // value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
      />
      <View style={styles.button}>
          <Button title = "ID"/>
          <Button title = "Restaurant"/>
          <Button title = "Dish"/>
      </View>
      {isLoading ? <ActivityIndicator/> : (
        <View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text>{item.id}</Text>
                <Text style ={styles.paragraph}>{item.name}</Text>
                <Text>{item.dish}</Text>
              </View>
            )}
          />
        </View>
      )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    flexDirection:'row',
    alignItems:'baseline',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  paragraph: {
   margin: 24,
   fontSize: 16,
   marginVertical: 4,
   textAlign: 'center',
 },
 button: {
   flex: 1,
   justifyContent: 'space-between',
   backgroundColor: '#ecf0f1',
   flexDirection:'row',
   alignItems:'baseline',
 },
});
