import { useState } from 'react'
import './styles.css'
import Item from './Item'

function App() {
  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([])

  function addTodo() {
    setTodoList(currentList => {
      return [...currentList, {id: crypto.randomUUID(), name: todoName, checked: false}]
    })
    setTodoName('')
  }

  function toggleTodo(id, checked) {
    setTodoList(currentList => {
      return currentList.map(listItem => {
        if (listItem.id === id) {
          return {...listItem, checked: checked}
        } else {
          return listItem
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodoList(currentList => {
      return currentList.filter(item => {
        if (item.id !== id) {
          return item
        }
        return 
      })
    })

    todoList.map(listItem => {
      return listItem.filter()
    })

    todoList.filter(listItem => {
      return listItem.id !== id
    })
  }

  return (
    <>
      <ul id="list">
        {todoList.map(listItem => {
          return <TodoItem key={listItem.id} {...listItem} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="new-todo">New Todo</label>
        <input type="text" id="new-todo" value={todoName} onChange={e => setTodoName(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
