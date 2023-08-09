import { useState, useEffect } from 'react'
import './styles.css'
import Item from './Item'

function App() {

  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState([])

  // useEffect(() => {
  //   listItem = todoList.map(item => {
  //     return <li>item</li>
  //   })
  // }, [todoList])

  function addTodo() {
    if (inputText === '') return
    setTodoList(currentList => {
      return [...currentList,
      { name: inputText, completed: false, id: crypto.randomUUID() }]
    })
    setInputText('')
    console.log(todoList)
  }

  function toggleTodo(id, completed) {
    setTodoList(currentList => {
      return currentList.map(item => {
        if (item.id === id) {
          return {...item, completed: completed}
        } else {
          return item
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodoList(currentList => {
      return currentList.filter(item => item.id !== id)
    })
  }



  return (
    <>
      <ul id="list">
        {/* {todoList.map(item => {
          <Item name={item.name} completed={item.completed} key={item.id} />
        })} */}

        {todoList.map(item =>
          <Item key={item.id} {...item} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        )}
      </ul>
      <div id='new-todo-form'>
        <label htmlFor="todo-input">New Todo</label>
        <input id="todo-input" type="text" value={inputText} onChange={event => setInputText(event.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
