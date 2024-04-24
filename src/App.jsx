import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './componant/forms/index'
import TodoList from './componant/todolist/index'
function App() {
  
  return (
    <>
      <LoginForm/>
      <TodoList/>
    </>
  )
}

export default App
