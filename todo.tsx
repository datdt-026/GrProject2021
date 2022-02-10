import React, {FC, ReactElement, useState} from 'react';
import {
  Alert,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Parse from 'parse/react-native';
import {
  List,
  Title,
  IconButton,
  Text as PaperText,
  Button as PaperButton,
  TextInput as PaperTextInput,
} from 'react-native-paper';

export const TodoList: FC<{}> = ({}): ReactElement => {
  // State variables
  const [readResults, setReadResults] = useState<[Parse.Object]>();
  const [newTodoTitle, setNewTodoTitle] = useState('');

  // Functions used by the screen components
  const createTodo = async function (): Promise<boolean> {
    // This value comes from a state variable
    const newTodoTitleValue: string = newTodoTitle;
    // Creates a new Todo parse object instance
    let Todo: Parse.Object = new Parse.Object('Todo');
    Todo.set('title', newTodoTitleValue);
    Todo.set('done', false);
    // After setting the todo values, save it on the server
    try {
      await Todo.save();
      // Success
      Alert.alert('Success!', 'Todo created!');
      // Refresh todos list to show the new one (you will create this function later)
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  const readTodos = async function (): Promise<boolean> {
    // Reading parse objects is done by using Parse.Query
    const parseQuery: Parse.Query = new Parse.Query('Todo');
    try {
      let todos: Parse.Object[] = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setReadResults(todos);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  const updateTodo = async function (
    todoId: string,
    done: boolean,
  ): Promise<boolean> {
    // Create a new todo parse object instance and set todo id
    let Todo: Parse.Object = new Parse.Object('Todo');
    Todo.set('objectId', todoId);
    // Set new done value and save Parse Object changes
    Todo.set('done', done);
    try {
      await Todo.save();
      // Success
      Alert.alert('Success!', 'Todo updated!');
      // Refresh todos list
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  const deleteTodo = async function (todoId: string): Promise<boolean> {
    // Create a new todo parse object instance and set todo id
    let Todo: Parse.Object = new Parse.Object('Todo');
    Todo.set('objectId', todoId);
    // .destroy should be called to delete a parse object
    try {
      await Todo.destroy();
      Alert.alert('Success!', 'Todo deleted!');
      // Refresh todos list to remove this one
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#208AEC" />
      <SafeAreaView style={Styles.container}>
        <View style={Styles.header}>
          <Image
            style={Styles.header_logo}
            source={{
              uri: 'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png',
            }}
          />
          <PaperText style={Styles.header_text_bold}>
            {'React Native on Back4App'}
          </PaperText>
          <PaperText style={Styles.header_text}>{'Product Creation'}</PaperText>
        </View>
        <View style={Styles.wrapper}>
          <View style={Styles.flex_between}>
            <Title>Todo List</Title>
            {/* Todo read (refresh) button */}
            <IconButton
              icon="refresh"
              color={'#208AEC'}
              size={24}
              onPress={() => readTodos()}
            />
          </View>
          <View style={Styles.create_todo_container}>
            {/* Todo create text input */}
            <PaperTextInput
              value={newTodoTitle}
              onChangeText={text => setNewTodoTitle(text)}
              label="New Todo"
              mode="outlined"
              style={Styles.create_todo_input}
            />
            {/* Todo create button */}
            <PaperButton
              onPress={() => createTodo()}
              mode="contained"
              icon="plus"
              color={'#208AEC'}
              style={Styles.create_todo_button}>
              {'Add'}
            </PaperButton>
          </View>
          <ScrollView>
            {/* Todo read results list */}
            {readResults !== null &&
              readResults !== undefined &&
              readResults.map((todo: Parse.Object) => (
                <List.Item
                  key={todo.id}
                  title={todo.get('title')}
                  titleStyle={
                    todo.get('done') === true
                      ? Styles.todo_text_done
                      : Styles.todo_text
                  }
                  style={Styles.todo_item}
                  right={props => (
                    <>
                      {/* Todo update button */}
                      {todo.get('done') !== true && (
                        <TouchableOpacity
                          onPress={() => updateTodo(todo.id, true)}>
                          <List.Icon
                            {...props}
                            icon="check"
                            color={'#4CAF50'}
                          />
                        </TouchableOpacity>
                      )}
                      {/* Todo delete button */}
                      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                        <List.Icon {...props} icon="close" color={'#ef5350'} />
                      </TouchableOpacity>
                    </>
                  )}
                />
              ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

// These define the screen component styles
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#208AEC',
  },
  header_logo: {
    width: 170,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  header_text_bold: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  header_text: {
    marginTop: 3,
    color: '#fff',
    fontSize: 14,
  },
  flex_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  create_todo_container: {
    flexDirection: 'row',
  },
  create_todo_input: {
    flex: 1,
    height: 38,
    marginBottom: 16,
    backgroundColor: '#FFF',
    fontSize: 14,
  },
  create_todo_button: {
    marginTop: 6,
    marginLeft: 15,
    height: 40,
  },
  todo_item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  },
  todo_text: {
    fontSize: 15,
  },
  todo_text_done: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
});
