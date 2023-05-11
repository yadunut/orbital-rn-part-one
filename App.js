import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';


export default function App() {
  let counter = 0;
  return (
    <View style={styles.container}>
      <Text>counter: ${counter}</Text>
      <Button onPress={() => counter = counter + 1}>Increment</Button>
      <Button onPress={() => counter = counter - 1}>Decrement</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
