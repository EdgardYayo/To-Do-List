import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import logo from './logo.svg';



function App() {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "Learn React",
    description: "Description Of Components, Hooks and Props",
    completed: false
  }])

  const getCurrent = (): number => new Date().getTime()

  const addTask = ( task : Task) => {
    setTasks([...tasks, {...task, id: getCurrent() , completed: false}])
  }

  const deleteTask = ( id : number) => {
   setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>

      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <img src={logo} alt='logo' style={{ width: '4rem' }} />
            React and Typescript By Edgard A. P.
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
        <div className="col-md-4">
          <TaskForm addTask={addTask}/>
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>

        </div>
      </main>
    </div>
  );
}

export default App;
