/*
The first post in index.js verifying wheather the user is sending the right data or not.
{
    title : string
    description : string
    }
    The 3rd put where the take will be maked true and it will be marked via id.
    {
        id : string
        }
*/
const zod = require("zod");

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string(),
})

//To export this createTodo and updateTodo from another file we need to write -:
module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}