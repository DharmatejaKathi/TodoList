import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, addText: ''}

  onDeleteTodo = id => {
    const {todoList} = this.state
    const filter = todoList.filter(each => each.id !== id)
    this.setState({todoList: filter})
  }

  onChangeAddText = event => {
    this.setState({addText: event.target.value})
  }

  onClickAddTask = () => {
    const {addText} = this.state

    const newItem = {
      id: uuid,
      title: addText,
    }

    this.setState(prevState => ({
      todoList: [...prevState.todoList, newItem],
      addText: '',
    }))
  }

  render() {
    const {todoList, addText} = this.state
    console.log(addText)
    return (
      <div className="bg-container">
        <ul className="ul">
          <h1 className="head">Simple Todos</h1>
          <div>
            <input
              type="text"
              placeholder="Add Todo"
              onChange={this.onChangeAddText}
              value={addText}
              className="add-input"
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAddTask}
            >
              Add
            </button>
          </div>
          <hr />

          {todoList.map(each => (
            <TodoItem
              details={each}
              key={each.id}
              onDeleteTodo={this.onDeleteTodo}
              editItem={this.editItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
