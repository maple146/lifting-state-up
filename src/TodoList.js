import {useState} from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { title: 'Exercise', id: 0},
    { title: 'Laundry', id: 1},
    { title: 'Dishes', id: 2},
    { title: 'Study', id: 3}
  ])

  return (
    <div class='todo-list-container'>
      {
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))
      }
      <div className='delete-button'>
        <p>Delete</p>
      </div>
    </div>
  )
}