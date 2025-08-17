import React, { useEffect, useState } from "react"
import { TodoProvider } from "./Context"
import TodoForm from "./Components/TodoForms"
import TodoItem from "./Components/TodoItem"


function App() {
  const [todos, setTodos] = useState([])
  

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo},...prev]) // Read Mark 1
  }
  const updateTodo = (id, todo) => {                       // Read Mark 2
    setTodos((prev) => prev.map((prevTodo) =>
      (prevTodo.id===id ? todo : prevTodo))
    )
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) =>          // take every todo in array except the one matches the ID
      (prevTodo.id !== id ))                             // then the array will contain all, except the deleted
    )
  }
  const completed = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?  // Read Mark 3 
     {...prevTodo, completed: !prevTodo.completed}: prevTodo)
    )
  }
  
  useEffect (() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0){
      setTodos(todos)
    }
  }, [])
  useEffect (() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, completed}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
          </div>          
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>            
        </div>        
      </div>
    </TodoProvider>
  )
}

export default App


// Mark 1 : if directly added setTodos(todo) then all values will be deleted
//          and new value will ne added
//          to avoid that we chech if prev(previously) value exist then 
//          distructure it and add new as well
//          [{}, ...prev] means added from front
//          [...prev, {}] add from back
//          [{id, rest of vales that are comming}]

// Mark 2 : a loop on prev and get prevTodo find the id(prevTodo.id) 
//          and match with id
//          if matched then updated or else return prevTodo

// Mark 3 : if preTodo.id matcheds with my id then 
//          ..prev = keep every vales as it is , then 
//          override the completed value with = what so ever is the current value REVERSE it
//          if true turn false, if false then true 