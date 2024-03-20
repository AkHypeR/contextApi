import React,{createContext, useContext} from "react"

export const TodoContext=createContext({
    todos:[{
        id:Date.now(),  
        massage:"massage",
        completed:false
    }],
    addTodo:(todo) => {},
    deleteTodo:(id) => {}
})

export const UseValue=()=>{
    return useContext(TodoContext)
}

export const TodoContextProvider=TodoContext.Provider