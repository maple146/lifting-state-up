function getClassName(selected) {
  if (selected) {
    return 'todo-item-container selected'
  } else {
    return 'todo-item-container'
  }
}

export default function TodoItem ({ todo, onItemClick }) {
  return (
    <div className={getClassName(todo.selected)} onClick={() => onItemClick(todo.id)}>
      <p className='todo-title'>{todo.title}</p>
    </div>
  )
}