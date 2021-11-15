import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

const Employee = (props) => {
  return (
    <View>
      <Text>Név: {props.name}</Text>
    </View>
  );
}

export default function App() {
  const [num, setNum] = useState(0);

  function handleButton() {
    /*location.reload();*/
    setNum(100);
  }

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>{num}</Text>
      <TouchableHighlight
        style={styles.runButton}
        onPress={handleButton}
      >
        <Text style={styles.runText}>Button</Text>
      </TouchableHighlight>
      <Image
        source={{
          width: 300,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <Image
        style={styles.image}
        source={{
          width: 300,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <Employee name='Para Béla' />
      <Employee name='Finom Emese' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 10,
  },
  runButton: {
    backgroundColor: 'lightgreen',
    marginTop: 10,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  }
});
