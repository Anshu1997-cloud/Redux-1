import React, { useState } from 'react'

const TodoInput = ({handleAddTodo}) => {
    const[title , setTitle] = useState("");
    const handleChange = (e) => {
       setTitle(e.target.value)
    }
  return (
    <div>
        <input onChange = {handleChange} value = {title} placeholder='Add todo here ...'  type = "text"/>
        <button onClick={() => handleAddTodo(title)}>Add </button>
    </div>
  )
}

export default TodoInput