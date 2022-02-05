import { useEffect, useState } from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Card from './components/Card';
import Header from './components/Header';

import './App.css';

const App = () => {
  let content;
  let results = localStorage.getItem('1');

  const [allTasks, setAllTasks] = useState([]);


  useEffect(() => {
    if(!results) return;
    setAllTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: results, id: Math.random().toString()});
      return updatedTasks;
    });
  }, [])

  const addTaskHandler = enteredData => {
    setAllTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: enteredData, id: Math.random().toString()});
      return updatedTasks;
    });
  }

  
  if (allTasks.length > 0) {
    console.log(allTasks);
    content = (<TaskList items={allTasks}/>);
  }
  
  // if (results.length > 0) {
  //   content = (<TaskList items={results}/>);
  // }


  return (
    <Card>
      <Header />
      {content}
      <TaskInput onAddTask={addTaskHandler} />
    </Card>
  );
}

export default App;
