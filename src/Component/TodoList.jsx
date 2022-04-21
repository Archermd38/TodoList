import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo'

const TodoList = () => {

  const [todos, setTodos] = useState([])

  const agregarTodo = (todo) =>{
    console.log(todo)
    setTodos((old) => [...old, todo])
  }

  const eliminarTodo = (id) =>{
    setTodos((old) => old.filter(item => item.id !==id))
  }

  const editarTodo = (id) =>{
    const editarTodos = todos.map(item => (
      item.id === id ? {...item, estado: !item.estado} : item
    ))

    setTodos(editarTodos)
  }

  return (
    <>
      <Form agregarTodo={agregarTodo}/>
      <ul className='list-group list-group-numbered mt-2'>
      {todos.map((item) => (
          <Todo 
            key={item.id} 
            todo={item} 
            eliminarTodo={eliminarTodo} 
            editarTodo={editarTodo}
          />

        ))}
      </ul>
    </>
  )
}

export default TodoList