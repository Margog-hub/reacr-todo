import useTasks from "./useTasks"
import useIncompleteTask from "./useIncompleteTask";
import { TasksContext } from "./TasksContext";
import { useMemo } from "react";

export const TasksProvider = (props) => {
  const { children } = props

  const {
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
    addTask,
    disappearingTaskId,
    appearingTaskId
  } = useTasks()

  const {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  } = useIncompleteTask(tasks)


  const value = useMemo(() => ({
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
    addTask,
    disappearingTaskId,
    appearingTaskId,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  }), [
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
    addTask,
    disappearingTaskId,
    appearingTaskId,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  ])

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}