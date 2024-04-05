import React from 'react'

const TodoItem = ({id , title, status, handleTodoStatus}) => {
  return (
    <div style = {{margin: "10px 0px"}}>
        <div>{title}</div>
        <button onClick={() => {handleTodoStatus(id, status)}}>{status ? "Pending" : "Marks as completed"}</button>
    </div>
  )
}

export default TodoItem