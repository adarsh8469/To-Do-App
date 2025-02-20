/*
    Todos{
        title : string,
        description : string,
        completed : boolean
    }
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:Adisingh69%40@cluster0.y4ehz.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo : todo
}