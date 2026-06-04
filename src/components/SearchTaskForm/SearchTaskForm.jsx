import { useContext } from "react"
import Field from "../Field/Field"
import { TasksContext } from "../../context/TasksContext"

const SearchTaskForm = (props) => {
  const {styles } = props
  const { searchQuery, setSearchQuery } = useContext(TasksContext)
  return (
    <form
      className={`${styles.form}`}
      onSubmit={e => e.preventDefault()}
    >
      <Field
        className={`${styles.field}`}
        label='Search task'
        id='search task'
        type='search'
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm