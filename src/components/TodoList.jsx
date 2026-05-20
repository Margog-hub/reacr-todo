import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks = [] } = props
  const hasTask = true;
  if (!hasTask) {
    <div className="todo__empty-message"></div>
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id} {...task}
        // className='todo__item'
        // id={task.id}
        // title={task.title}
        // isDone={task.isDone} 
        />))}
    </ul>
  )
}

export default TodoList