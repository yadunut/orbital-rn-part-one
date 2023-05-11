import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';


export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <Text>counter: {counter}</Text>
      <Button onPress={() => setCounter(prevValue => prevValue + 1)}>Increment</Button>
      <Button onPress={() => setCounter(prevValue => prevValue - 1)}> Decrement</Button>
      <TextInput value={value} onChangeText={setValue} />
      <Button onPress={() => {
        console.log(`value of textinput was ${value}`);
      }}>Submit</Button>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
