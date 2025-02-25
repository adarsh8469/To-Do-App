/*
    here todos is an array [
        title,
        description,
        completed
    ]
*/

export function Todos({todos}){
    return <div>
        {
            //As we know we return a div and in react we write function in {} and with the help of map function 
            //we have iterated over the todos array which are passed as props.
            todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as Done"}</button>
                </div>
            })
        }
    </div>
}