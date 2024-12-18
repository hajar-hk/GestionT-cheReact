import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  
  //Le useState initialise les tâches à partir du localStorage si elles existent.
  const [tasks, setTasks] = useState(() =>{
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  //Le useEffect surveille les changements dans tasks et les sauvegarde dans localStorage
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }, [tasks]);

  const[filter, setFilter] = useState('all');
  const addTask = (text) =>{
    setTasks([...tasks, {id: Date.now(), text, completed:false}]);
  };

  const toggleComplete = (id) =>{
    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task, completed: !task.completed } :task
    )
    );
  };

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const filteredTasks = tasks.filter((task)=>{
    if(filter === 'completed') return task.completed;
    if(filter === 'active') return !task.completed;
    return true; // 'all'
  })
  return(
    <div className='App'>
      <h1>Gestion des Tâhes</h1>
      <AddTask addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList
      tasks={filteredTasks}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      />

    </div>
  );
}
export default App;
