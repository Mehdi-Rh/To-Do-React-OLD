import React from 'react'
import { useState } from 'react'
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {

  const [edit, setEdit] = useState(false)

  // Make the todo editable
  const handleEditing = () => {
    setEdit(true)
  }

  // Submit updated todo
  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEdit(false)
    }
  }

  let viewMode = {}
  let editMode = {}

  if (edit) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }


  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props

  return (
    <li className={styles.item} >

      <div onDoubleClick={handleEditing} style={viewMode}> 
        <input 
          type="checkbox" 
          className={styles.checkbox}
          checked={completed} 
          onChange={() => props.handleChangeProps(id)}  
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={props.completed ? completedStyle : null}>
          {title}
        </span>
      </div>

      <input 
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdateProps(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />

    </li>
  )
}

export default TodoItem