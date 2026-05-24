import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'
import Button from './Button'


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
  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

  const deleteAllTasks = useCallback(() => {
    const isCofirmed = confirm('Are you sure you want delete all?')
    if (isCofirmed) {
      setTasks([])
    }
  }, []
  )

  const deleteTask = useCallback((taskId) => {
    setTasks(tasks.filter((task => (task.id !== taskId))))
  }, [tasks]
  )

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      }))
    }, [tasks]
  )

  const addTask = useCallback(() => {
    if (newTasksTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTasksTitle,
        isDone: false
      }
      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTasksTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()
    }
  }, [newTasksTitle]
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]
  )

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, []
  )

  const filtredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()
    return clearSearchQuery.length > 0 ?
      tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
  }, [searchQuery, tasks]
  )

  const doneTask = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length
  }, [tasks]
  )

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      < AddTaskForm
        addTask={addTask}
        newTasksTitle={newTasksTitle}
        setNewTasksTitle={setNewTasksTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={doneTask}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <Button onClick={() => { firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>
        Show first incomplete task
      </Button>
      <TodoList
        tasks={tasks}
        filtredTasks={filtredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo