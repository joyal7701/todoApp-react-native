import React from "react";
import { Text, View, TextInput, Button } from "react-native";
class App extends React.Component {
  state = {
    todo: [],
    text: "",
  };
  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: "" });
  };
  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  };
  renderTodos = () => {
    return this.state.todo.map((t) => {
      return (
        <Text
          key={t}
          onPress={() => {
            this.deleteTodo(t);
          }}
        >
          {t}
        </Text>
      );
    });
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Todo App!</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button title="Click me" onPress={this.addTodo} />
        {this.renderTodos()}
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    width: 300,
  },
};
export default App;
