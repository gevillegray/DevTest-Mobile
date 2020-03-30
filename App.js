import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, AsyncStorage} from 'react-native';
import IncrementButton from './components/IncrementButton'
import Navigator from './routes/homeStack';

export default function App() {
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


// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View, TextInput, StyleSheet} from 'react-native';
//
// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//
//   useEffect(() => {
//     fetch('https://devapi.inertia.systems/devtest/lunchspecials.php')
//       .then((response) => response.json())
//       .then((json) => setData(json.body.lunchspecials))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   });
//
//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//     <TextInput
//           style={styles.textInputStyle}
//           // onChangeText={text => this.SearchFilterFunction(text)}
//           // value={this.state.text}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.name}, {item.dish}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
// });
