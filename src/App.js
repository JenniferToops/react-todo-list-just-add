import { useState } from 'react'
// imports the useState hook (React v6.18) which allows you to use state without classes
import Header from "./components/Header";
// imports the Header component from the components folder
import List from "./components/List"
// imports List component from components folder
import AddTodo from "./components/AddTodo"
// imports AddTodo component from components folder

function App() {
  // creates function "App" with props

  const [todos, setTodos] = useState([
    //deconstructs todos and setTodos
    {
      id: 1,
      //prop = id, value = 1
      item: "Drink Water",
      //prop = item, value = drink water
    },
    {
      id: 2,
      //prop = id, value = 2
      item: "Make Healthy Dinner",
      //prop = item, value = make healthy dinner
    },
    {
      id: 3,
      //prop = id, value = 3
      item: "Exercise",
      //prop = item, value = exercise
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
