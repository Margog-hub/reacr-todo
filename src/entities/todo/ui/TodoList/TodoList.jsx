import { memo, useContext } from 'react';
import { TodoItem, TasksContext } from '@/entities/todo'

const TodoList = (props) => {
  const { styles } = props
  const { tasks, filtredTasks } = useContext(TasksContext)
  const hasTask = tasks.length > 0
  const isEmptyFiltredTasks = filtredTasks?.length === 0

  if (!hasTask) {
    return <div className={`${styles.emptyMessage}`}>There are no tasks yet</div>
  }

  if (hasTask && isEmptyFiltredTasks) {
    return <div className={`${styles.emptyMessage}`}>Tasks not found</div>
  }

  return (
    <ul className={`${styles.list}`}>
      {(filtredTasks ?? tasks).map((task) => (
        <TodoItem
          className={`${styles.item}`}
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default memo(TodoList)