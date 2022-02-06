import { useEffect, useState } from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Card from './components/Card';
import Header from './components/Header';

import './App.css';

const App = () => {
  let content;

  const [allTasks, setAllTasks] = useState([]);


  useEffect(() => {
    Object.keys(localStorage).sort().reverse().forEach(val => {
      if(!val) return;
      let result = localStorage.getItem(val);
      setAllTasks(prevTasks => {
        const updatedTasks = [...prevTasks];
        updatedTasks.unshift({text: result, id: Math.random().toString()});
        return updatedTasks;
      });
    })
    
  }, [])

  const addTaskHandler = enteredData => {
    setAllTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: enteredData, id: Math.random().toString()});
      return updatedTasks;
    });
  }

  const deleteItemHandler = goalId => {
    setAllTasks(prevTasks => {
      const updatedGoals = prevTasks.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  }

  if (allTasks.length > 0) {
    console.log(allTasks);
    content = (<TaskList items={allTasks} onDeleteItem={deleteItemHandler}/>);
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
