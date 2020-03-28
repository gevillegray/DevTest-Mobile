import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function IncrementButton(){
  const [counter, addOne] = useState(0);
  var title = "Main Screen Counter - " + String(counter)
  
  return(
    <View>
      <Button
        onPress = {() => addOne(counter + 1)}
        title = {title}
      />
    </View>
  )
}
