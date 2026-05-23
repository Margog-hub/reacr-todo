import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange, filtredTasks } = props
  const hasTask = tasks.length > 0
  const isEmptyFiltredTasks = filtredTasks?.length === 0

  if (!hasTask) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  if (hasTask && isEmptyFiltredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>
  }

  return (
    <ul className="todo__list">
      {(filtredTasks ?? tasks).map((task) => (
        <TodoItem
          key={task.id} {...task}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
        />))}
    </ul>
  )
}

export default TodoList