import React from 'react'
import { useState, useEffect } from 'react'
import { Routes ,Route } from 'react-router-dom';
import Header from './Header'
import Navbar from "./Navbar"
import InputTodo from './InputTodo'
import TodosList from './TodosList'
import { v4 as uuidv4 } from "uuid"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import { BrowserRouter as Router } from "react-router-dom"



const TodoContainer = () => {

  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  const[todos, setTodos] = useState(getInitialTodos())

  useEffect(() => {
    console.log("test run")
  
    // getting stored items
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
  
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [setTodos])

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

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

  const setUpdate = (updatedTitle, id) => {
    const updateTodo = todos.map(todo => {
      if (todo.id === id) {
          todo.title = updatedTitle
      }
      return todo
    })
    setTodos(updateTodo) 
  }

  return (
    <Routes>
      <Route exact path="/" element={        
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem}/>
            <TodosList 
              todosProp={todos} 
              handleChangeProps={handleChange}
              deleteTodoProps={delTodo}
              setUpdateProps={setUpdate}
            />
          </div>
        </div>
      }
      />
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotMatch />}/>

    </Routes>


  )

}

export default  TodoContainer