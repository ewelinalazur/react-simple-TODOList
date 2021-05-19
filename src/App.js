import React from "react";
import Todo from './components/Todo';
import FormTask from './components/FormTask';
import { Card } from "react-bootstrap";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: "To jest zadanie same",
      isDone: false
    }
  ]);

const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };
const markTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isDone = true;
    setTasks(newTasks);
  };
const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
};

  return (

    <Card style={{ width: '30rem',  margin: 'auto',  padding: '10px',  }}>
      <Card.Body>
      <Card.Title>TODOList</Card.Title>
      <FormTask addTask={addTask} />
      <Card.Text>
      {tasks.map((task, index) => (
        <Todo
          key = {index}
          index = {index}
          task = {task}
          markTask ={markTask}
          removeTask = {removeTask}
         />
         ))}
      </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default App;
