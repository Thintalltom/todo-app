import React from 'react'

const Completed = ({todo}) => {
  return (
    <div>
        {todo.completed ? <div> {todo.text} </div> : <p>No completed task at the moment </p>}
    </div>
  )
}

export default Completed