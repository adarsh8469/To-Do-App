// Writing the basic express boilerplate code.
// with express.json() middleware
// What use will send in the body
//  body {
//         title : String,
//         description : String
//  }
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You entered the wrong inputs"
        })
        return;
    }
    try{
        await todo.create({
            title : createPayload.title,
            description : createPayload.description
        })
    }
    catch(e){
        alert("Database is Down")
    }

    res.json({
        msg : "Todo Created"
    })
});

app.get("/todos", function(req, res){

});

app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You entered the wrong inputs"
        })
        return;
    }
});

app.port(3000);