import { useContext } from "react"
import Button from "./Button"
import Field from "./Field"
import { TasksContext } from "../context/TasksContext"


const AddTaskForm = () => {
  const { addTask, newTasksTitle, setNewTasksTitle, newTaskInputRef } = useContext(TasksContext)

  const onSubmit = (e) => {
    e.preventDefault()
    addTask()
  }

  return (
    <form className='todo__form' onSubmit={onSubmit}>
      <Field
        className='todo__form'
        label='New Task title'
        id='new-task'
        ref={newTaskInputRef}
        value={newTasksTitle}
        onInput={(e) => setNewTasksTitle(e.target.value)}
      />
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default AddTaskForm