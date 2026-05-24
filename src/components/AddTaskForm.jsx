import Button from "./Button"
import Field from "./Field"


const AddTaskForm = (props) => {
  const {addTask, newTasksTitle, setNewTasksTitle,
    newTaskInputRef
  } = props 
  const onSubmit =(e) => {
  e.preventDefault()
  addTask()
  }
  return (
    <form className='todo__form' onSubmit ={onSubmit}>
      <Field 
        className='todo__form' 
        label='New Task title' 
        id='new-task'
        ref= {newTaskInputRef}
        value ={newTasksTitle}
        onInput ={ (e)=> setNewTasksTitle(e.target.value)} 
        />
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default AddTaskForm