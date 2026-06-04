import { useContext, useState } from "react"
import Button from '../Button/Button'
import Field from "../Field/Field"
import { TasksContext } from "../../context/TasksContext"


const AddTaskForm = (props) => {
  const { styles } =props
  const { addTask, newTasksTitle, setNewTasksTitle, newTaskInputRef } = useContext(TasksContext)
  const [error, setError] = useState('')

  const clearNewTaskTitle = newTasksTitle.trim()
  const isNewTaskTitleEmply = clearNewTaskTitle.length === 0

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isNewTaskTitleEmply) {
      addTask(clearNewTaskTitle)
    }
  }

  const onInput = (e) => {
    const { value } = e.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0
    setNewTasksTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be emply' : '')
  }

  return (
    <form className={`${styles.form}`} onSubmit={onSubmit}>
      <Field
        className={`${styles.form}`}
        label='New Task title'
        id='new-task'
        error={error}
        ref={newTaskInputRef}
        value={newTasksTitle}
        onInput={onInput}
      />
      <Button
        type='submit'
        isDisabled={isNewTaskTitleEmply}
      >
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm