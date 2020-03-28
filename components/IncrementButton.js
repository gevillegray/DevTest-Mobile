import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function IncrementButton(){
  const [counter, increment] = useState(0);
  var title = "Main Screen Counter - " + String(counter);

  return(
    <View>
      <Button
        onPress = {() => increment(counter + 1)}
        title = {title}
      />
    </View>
  )
}
