import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import useTasksLocalStorage from "./useTasksLocalStorage";


const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStorage()

  const [tasks, setTasks] = useState(savedTasks ?? [
    { id: 'task-1', title: "купити молоко ", isDone: false },
    { id: 'task-2', title: "погладити котика ", isDone: true },
  ])

  const [newTasksTitle, setNewTasksTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("")
  const newTaskInputRef = useRef(null)

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want delete all?')
    if (isConfirmed) {
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
    saveTasks(tasks)
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
  return {
    tasks,
    filtredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTasksTitle,
    setNewTasksTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask
  }
}

export default useTasks