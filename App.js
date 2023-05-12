import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Checkbox, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



function TodoItem({ todo, updateTodo }) {
  const handleCheckboxChange = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <View style={styles.todoItemContainer}>
      <Text>{todo.title}</Text>
      <Checkbox.Android
        status={todo.completed ? 'checked' : 'unchecked'}
        onPress={handleCheckboxChange} />
    </View>
  );
}

function TodoInput({ addTodo }) {
  const [text, setText] = useState();
  const handleButtonPress = () => {
    addTodo({ title: text, completed: false });
  }
  return (
    <View style={styles.todoInputContainer}>
      <TextInput style={styles.textInput} value={text} onChangeText={setText} />
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
      return [...existingItems, { id, ...todo, createdAt: new Date() }];
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
        renderItem={({ item }) => <TodoItem todo={item} updateTodo={updateTodo} />}
        ListFooterComponent={() => <TodoInput addTodo={addTodo} />} />
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
    padding: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  }
});
