import React, { useState } from 'react'
import {UseValue} from '../context/index'
function TodoForm() {
  const [todo,setTodo]=useState("")
  const {addTodo} = UseValue()
  const add=()=>{
    e.preventDefault()
    if(!todo) return
    addTodo({todo, completed:false})
    setTodo(" ")
  }

  return (
    <div>
      <form onSubmit={add}>
        <input type="text" 
        placeholder='Add Task'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />

        <button type='submit'>
          Add
        </button>

      </form>

    </div>
  )
}

export default TodoForm