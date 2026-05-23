import { useEffect, useState } from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [
      { id: 'task-1', title: "купити молоко ", isDone: false },
      { id: 'task-2', title: "погладити котика ", isDone: true },
    ]
  })

  const [newTasksTitle, setNewTasksTitle] = useState("");

  const [searchQuery, setSearchQuery] = useState("")

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

  const addTask = () => {
    if (newTasksTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTasksTitle,
        isDone: false
      }
      setTasks([...tasks, newTask])
      setNewTasksTitle('')
      setSearchQuery('')
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const clearSearchQuery = searchQuery.trim().toLowerCase()

  const filtredTasks = clearSearchQuery.length > 0 ?
    tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      < AddTaskForm
        addTask={addTask}
        newTasksTitle={newTasksTitle}
        setNewTasksTitle={setNewTasksTitle}
      />
      <SearchTaskForm
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        filtredTasks={filtredTasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo