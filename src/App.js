import { useState } from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Card from './components/Card';

import './App.css';

const App = () => {
  const [allTasks, setAllTasks] = useState([]);

  const addTaskHandler = enteredData => {
    setAllTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: enteredData, id: Math.random().toString()});
      return updatedTasks;
    });
  }

  let content;

  if (allTasks.length > 0) {
    content = (<TaskList items={allTasks}/>);
  }

  return (
    <Card>
      {/* <h1>Todo List</h1>
      <p>A simple React Todo List App</p> */}
      {content}
      <TaskInput onAddTask={addTaskHandler} />
    </Card>
  );
}

export default App;
