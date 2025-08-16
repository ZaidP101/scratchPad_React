import { useState } from 'react'
import UserContextProvider from './Context/userContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profle'

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          React Context-API in Action
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Login />
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
