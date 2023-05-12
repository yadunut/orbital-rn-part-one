import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



function TodoItem({ todo }) {
  return (<View style={styles.todoItemContainer}><Text>{todo.title}</Text></View>)
}

function TodoInput() {
  const handleButtonPress = () => { }
  return (
    <View style={styles.todoInputContainer}>
      <TextInput style={styles.textInput} />
      <Button onPress={handleButtonPress} mode="contained" style={styles.button}>Submit</Button>
    </View>
  );
}

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "buy milk",
      completed: false,
      createdAt: new Date(2023, 1, 1),
      completedAt: null,
    },
    {
      id: 2,
      title: "buy eggs",
      completed: true,
      createdAt: new Date(2023, 1, 1),
      completedAt: new Date(2023, 5, 12),
    }
  ]);

  function addTodo(todo) {
    setTodos(existingItems => {
      const id = existingItems[existingItems.length - 1].id + 1;
      return [...existingItems, { id, ...todo }];
    });
  }

  function updateTodo(todo) {
    setTodos(existingItems => {
      const itemIndex = existingItems.findIndex(item => item.id === todo.id);
      return [
        ...existingItems.slice(0, itemIndex),
        todo,
        ...existingItems.slice(itemIndex + 1)
      ];
    })

    // this is not the proper way to do this.
  }

  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        ListFooterComponent={() => <TodoInput />} />
    </View>
  )
}


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  todosContainer: {
  },
  todoInputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    flex: 1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoItemContainer: {
    backgroundColor: 'blue',
  }

});
