import React from 'react'

function Item({id, name, checked, toggleTodo, deleteTodo}) {
  return (
    <li key={id} className="list-item">
      <label className="list-item-label">
        <input type="checkbox" checked={checked} onChange={e => toggleTodo(id, e.target.checked)} data-list-item-checkbox/>
        <span data-list-item-text >{name}</span>
      </label>
      <button onClick={() => deleteTodo(id)}data-button-delete>Delete</button>
    </li>
  )
}

export default Item