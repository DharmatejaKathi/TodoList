import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {isSave: false, updatedTitle: ''}

  upDateTodo = () => {
    const {updatedTitle} = this.state
    const {details} = this.props

    this.setState({isSave: false})
  }

  onSaveTitle = () => {
    const {details} = this.props
    this.setState({isSave: true, updatedTitle: details.title})
  }

  onChangeTitleInput = event => {
    this.setState({updatedTitle: event.target.value})
  }

  getTodoItem = () => {
    const {details, onDeleteTodo} = this.props
    const {title, id} = details
    const deleteTodo = () => {
      onDeleteTodo(id)
    }

    const {isSave, updatedTitle} = this.state

    return (
      <li className="li">
        {isSave ? (
          <>
            <input
              className="edit-input"
              type="text"
              onChange={this.onChangeTitleInput}
              value={updatedTitle}
            />
            <button
              type="button"
              className="save-button"
              onClick={this.upDateTodo}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="title">{title}</p>
            <button type="button" className="edit" onClick={this.onSaveTitle}>
              Edit
            </button>
            <button type="button" onClick={deleteTodo}>
              Delete
            </button>
          </>
        )}
      </li>
    )
  }

  render() {
    return <>{this.getTodoItem()}</>
  }
}

export default TodoItem
