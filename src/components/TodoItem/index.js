// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, onDeleteTodo} = props
  const {title, id} = details
  const deleteTodo = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="li">
      <p>{title}</p>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
