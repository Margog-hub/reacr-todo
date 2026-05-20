
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'
import query from './../../node_modules/esquery/dist/esquery.esm';

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: "купити молоко ", isDone: false },
    { id: 'task-2', title: "погладити котика ", isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log("All")
  }
  const deleteTask = (taskId) => {
    console.log(taskId)
    // tasks.filter((task => (task.id !== taskId)))
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(` Задача ${taskId} ${isDone ? 'виконана' : 'не виконана'}`)
  }

  const filterTask = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    console.log(`Задача добавлена! `)
  }
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      < AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTask} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete} />
    </div>
  )
}

export default Todo