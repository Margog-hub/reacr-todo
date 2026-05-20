import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props
  const hasTask = true;
  if (!hasTask) {
    <div className="todo__empty-message"></div>
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id} {...task}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange ={onTaskCompleteChange}
        />))}
    </ul>
  )
}

export default TodoList