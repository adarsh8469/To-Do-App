import { useState } from 'react'
import { CreateTodo } from './components/CreateTode'
import { Todos } from './components/Todos'

function App() {
  const [todos, settodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    settodos(json.todos);
  })
  return (
      <div>
        <CreateTodo/>
        <Todos todos = {todos}/>
      </div>
  )
}

export default App
