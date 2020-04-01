import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class LunchSpecials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      searchText: null,
      idDescending: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "https://devapi.inertia.systems/devtest/lunchspecials.php";
    this.setState({loading: true});
    try {
      const response = await fetch (url);
      const json = await response.json();
      this.setResult(json.body.lunchspecials);
    } catch (e) {
      this.setState({loading: flase, error:'Error Loading Restaurants'});
    }
  };

  setResult = (res) => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.data, ...res],
    });
  };

  updateSearch = (searchText) => {
    this.setState({searchText}, () => {
      if ('' == searchText) {
        this.setState({
          data: [...this.state.temp],
        });
        return;
      }
      this.state.data = this.state.temp.filter(function (item) {
        return (item.name.includes(searchText) || item.dish.includes(searchText));
      })
      .map(function({id, name, dish}) {
        return {id, name, dish};
      });
    });
  };


  render(){
    return (
      <View>
        <SearchBar placeholder ="Search ..."
        lightTheme round editable = {true}
        value = {this.state.searchText}
        onChangeText={this.updateSearch}
        />
        <View style={styles.button}>
           <Button
             title = "ID"
           />
           <Button title = "Restaurant"/>
           <Button title = "Dish"/>
         </View>

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.container}>
                <Text>{item.id}</Text>
                <Text style ={styles.paragraph}>{item.name}</Text>
                <Text>{item.dish}</Text>
            </View>

          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'baseline',
  },
  button: {
   justifyContent: 'space-between',
   backgroundColor: '#ecf0f1',
   flexDirection:'row',
   alignItems:'baseline',
 },
});
export default LunchSpecials;
