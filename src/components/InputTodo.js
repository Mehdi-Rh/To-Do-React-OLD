import React from 'react'
import { useState } from 'react'

const InputTodo = (props) => {
  const [newTodo, setNewTodo] = useState({
    title: ""
  } )

  const onChange = e => {
    const newTitle = {[e.target.name] : e.target.value} 
    setNewTodo(newTitle)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(newTodo.title.trim())
    setNewTodo({title:""})
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">    
      <input 
        type="text" 
        className="input-text"
        placeholder="Add a new task" 
        value={newTodo.title} 
        onChange={onChange} 
        name="title"/>
      <button className="input-submit">Submit</button>
    </form>

  )
}

export default  InputTodo
