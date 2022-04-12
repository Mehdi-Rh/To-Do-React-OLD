import React from 'react'
import { useState } from 'react'

import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList'
import { v4 as uuidv4 } from "uuid"



const TodoContainer = () => {
  const[todos, setTodos] = useState(
    [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  )

  // useEffect(() => {})

  const handleChange = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
          todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const delTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id )
    setTodos(newTodos) 
  }
      
  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem}/>
        <TodosList 
          todosProp={todos} 
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      </div>
    </div>

  )

}

export default  TodoContainer