// Writing the basic express boilerplate code.
// with express.json() middleware
// What use will send in the body
//  body {
//         title : String,
//         description : String
//  }
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You entered the wrong inputs"
        })
        return;
    }
    else{
        //Insert in the mongoDB

    }
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