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

  const deleteItemHandler = taskId => {
    setAllTasks(prevTasks => {
      const deletedTasks = prevTasks.filter(task => task.id !== taskId);
      return deletedTasks;
    })
  }

  const editItemHandler = taskMessage => {
    // console.log(props)
    // setAllTasks(prevTasks => {
    //   const modifiedTasks = prevTasks.filter(task => task.text !== taskMessage);
    //   console.log(modifiedTasks);
    //   return modifiedTasks;
    // })
  }

  if (allTasks.length > 0) {
    content = (<TaskList items={allTasks} onDeleteItem={deleteItemHandler} onEditItem={editItemHandler} />);
  }

  return (
    <Card>
      <Header />
      {content}
      <TaskInput onAddTask={addTaskHandler} />
    </Card>
  );
}

export default App;
