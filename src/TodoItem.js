import {useState} from 'react'

function getClassName(selected) {
  if (selected) {
    return 'todo-item-container selected'
  } else {
    return 'todo-item-container'
  }
}

export default function TodoItem ({ todo }) {
  const [selected, setSelected] = useState(false)

  function onClick() {
    setSelected((value) => !value)
  }

  return (
    <div className={getClassName(selected)} onClick={onClick}>
      <p className='todo-title'>{todo.title}</p>
    </div>
  )
}