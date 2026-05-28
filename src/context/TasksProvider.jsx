import useTasks from "../hooks/useTasks";
import useIncompleteTask from "../hooks/useIncompleteTask";
import { TasksContext } from "./TasksContext";

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
    addTask
  } = useTasks()

  const {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  } = useIncompleteTask(tasks)

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filtredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTasksTitle,
        setNewTasksTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask
      }}>
      {children}
    </TasksContext.Provider>
  )
}