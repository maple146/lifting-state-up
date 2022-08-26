import {useState} from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { title: 'Exercise', selected: false, id: 0},
    { title: 'Laundry', selected: false, id: 1},
    { title: 'Dishes', selected: false, id: 2},
    { title: 'Study', selected: false, id: 3}
  ])

  function onTodoItemClicked(id) {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.selected = !todo.selected
    setTodos(newTodos)
  }

  function deleteSelectedItem() {
    const newTodos = todos.filter((todo) => todo.selected === false)
    setTodos(newTodos)
  }

  return (
    <div class='todo-list-container'>
      {
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onItemClick={onTodoItemClicked}/>
        ))
      }
      <div className='delete-button' onClick={deleteSelectedItem}>
        <p>Delete</p>
      </div>
    </div>
  )
}