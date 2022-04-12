import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {



  const liTodos = props.todosProp.map(i => 
    <TodoItem 
      id={i.id} 
      title={i.title} 
      completed={i.completed} 
      handleChangeProps={props.handleChangeProps}
      deleteTodoProps={props.deleteTodoProps}
    />);

  return (
    <ul>
      {liTodos}
    </ul>
  )
}

export default TodosList