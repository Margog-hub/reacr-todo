import useTasks from "./useTasks"
import useIncompleteTask from "./useIncompleteTask";
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
    addTask, 
    disappearingTaskId,
    appearingTaskId
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
        addTask,
        disappearingTaskId,
        appearingTaskId
      }}>
      {children}
    </TasksContext.Provider>
  )
}