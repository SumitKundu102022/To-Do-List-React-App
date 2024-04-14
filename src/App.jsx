import { useState } from 'react'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList />
      <Footer/>
    </>
  )
}

export default App
