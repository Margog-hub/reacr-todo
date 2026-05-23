import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {

  const [tasks, setTasks] = useState([
    { id: 'task-1', title: "купити молоко ", isDone: false },
    { id: 'task-2', title: "погладити котика ", isDone: true },
  ]);
  const [newTasksTitle, setNewTasksTitle] = useState("");

  const deleteAllTasks = () => {
    const isCofirmed = confirm('Are you sure you want delete all?')
    if (isCofirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task => (task.id !== taskId))))
  }

  const toggleTaskComplete = (taskId, isDone) => {
   setTasks(tasks.map(task => {
     if (task.id === taskId) {
      return { ...task, isDone };
    }
    return task;
  }))
}

  const filterTask = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    if (newTasksTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTasksTitle,
        isDone: false
      }
      setTasks([...tasks, newTask])
       console.log("Очищаем input, было:", newTasksTitle)
      setNewTasksTitle('')
      console.log("После setNewTasksTitle") 
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      < AddTaskForm
        addTask={addTask}
        newTasksTitle={newTasksTitle}
        setNewTasksTitle={setNewTasksTitle} 
      />
      <SearchTaskForm onSearchInput={filterTask} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete} />
    </div>
  )
}

export default Todo