import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            width : 270,
            padding : 9,
            margin : 9
        }} type="text" placeholder="Enter the title" onChange={function(e){
            setTitle(e.target.value);
        }}/><br />
        <input style={{
            width : 270,
            padding : 9,
            margin : 9
        }} type="text" placeholder="Enter the description" onChange={function(e){
            setDescription(e.target.value);
        }}/><br />
        <button onClick={
            () => {
                fetch("http://localhost:3000/todo", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description
                    }),
                    //We need to send the headers otherwise our backend will not identify that it is json 
                    headers : {
                        "Content-type" : "application/json"
                    }
                }).then(async function(res){
                    const json = await res.json();
                })
            }
        } style={{
            backgroundColor : "black",
            color : "white",
            border : "None",
            borderRadius : 3,
            padding : 9,
            margin : 9
        }}><b>Add a todo</b></button>
    </div>
}

// With the help of usestate we are sending the title and description in the backend.
// Whenever we type something on the input box onChange triggers and with the help of (target.value) we will be able to get the inner data.