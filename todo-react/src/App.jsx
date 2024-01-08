import './styles/global.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

function App() {
  const [tasks, setTasks] = useState([])

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(saved)
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  const setTasksAndSave = (newTask) => {
    setTasks(newTask);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
    console.log(newTask)
  }

  useEffect(() => {
    loadSavedTasks()
  },[])

  const addTask = (taskTitle) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }
  
  const toggleTaskCompletedById = (taskId) => {
    const newTask = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasksAndSave(newTask)
  }

  const deleteTaskById = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasksAndSave(newTask);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <TaskList 
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </div>
  )
}

export default App
