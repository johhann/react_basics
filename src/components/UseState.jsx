import React, {useState} from 'react'
// import row from './Row'

export default function UseState() {
  const [todo, setTodo] = useState({
    body: "this is my first to do",
    completed: "No"
  });

  function handleCompleted(e) {
    setTodo(prevState => {
      return {...prevState, 
      completed: 'Yes'}
    })
  }

  return (
    <div>
      <h2>ToDo List</h2>
      <p>Body: {todo.body}</p>
      <p>Completed: {todo.completed}</p>
      <button onClick={handleCompleted}>Mark Completed</button>
    </div>
  )
}
