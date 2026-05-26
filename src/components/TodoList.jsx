import { memo, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { tasks, filtredTasks } = useContext(TasksContext)
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
          className='todo__item'
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default memo(TodoList)