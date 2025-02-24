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
    //Put the data in mongoDB database
    try{
        await todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : false
        })
    }
    catch(e){
        alert("Database is Down")
    }

    res.json({
        msg : "Todo Created"
    })
});

app.get("/todos", async function(req, res){
    const todos = await todo.find();
    res.json({
        todos
    })
});

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You entered the wrong inputs"
        })
        return;
    }

    todo.update({ _id : req.body.id }, { completed : true })

    res.json({
        msg : "Todo is updated"
    })
});

app.listen(3000);