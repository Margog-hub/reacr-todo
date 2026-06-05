import { useContext, useState } from "react"
import Button from '@/shared/ui/Button'
import Field from "@/shared/ui/Field"
import { TasksContext } from "@/entities/todo"


const AddTaskForm = (props) => {
  const { styles } = props
  const { addTask, newTasksTitle, setNewTasksTitle, newTaskInputRef } = useContext(TasksContext)
  const [error, setError] = useState('')

  const clearNewTaskTitle = newTasksTitle.trim()
  const isNewTaskTitleEmply = clearNewTaskTitle.length === 0

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isNewTaskTitleEmply) {
      addTask(clearNewTaskTitle)
      setNewTasksTitle('')
    }
  }

  const onInput = (e) => {
    const { value } = e.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0
    setNewTasksTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
  }

  return (
    <form className={`${styles.form}`} onSubmit={onSubmit}>
      <Field
        className={`${styles.field}`}
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