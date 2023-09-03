import { useState, useEffect } from "react"
import axios from "axios"
import Todo from "./components/Task";

export interface ITodo {title: string; userId: number; id: number; completed: boolean}

const src = 'https://jsonplaceholder.typicode.com/todos'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    axios.get(src)
    .then((data) => setTodos(data.data))
  }, [])

  return (
    <>
    {todos.map((item) => <Todo todo={item}/>)}
    </>
  )
}

export default App
