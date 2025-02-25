<!-- md -> mark down -->
## Todo App

- Anyone can create a todo
- Anyone can see their existing todos
- Anyone can mark a todo as done

- Step : 1

    - Creating backend Folder(Any name)
        - Initializing a node project
        - putting a package.json

    - To do this we need to run commands
        - npm init 
        - enter the package name and all the details it is asking

- Step : 2

    - Run npm install express

- Step by step

- create a index.js file in backend
- create a types.js file in backend for the verification using zod library
- Inside the type.js writing the validation logic via zod
- Inside the index.js we are reesponding the user wheather the inputs are corretely field or not in the post and put methods.

- Step : 3
    - Run npm install mongoose (Now setting up the Database)
    - In the index.js (post) we will be writing logic to add in the database
    - In the (get) of index.js we will be getting all the data by using find which returns promise 

# Till here backend is completed
# Frontend

    - install react by -:
        - npm create vite@latest
        - project name : frontend
        - React
        - javascript

    - Now run npm install 
    - Run npm run dev to check the react app 

    - Create a components folder in the src (In React, a component is a modular, reusable piece of a user interface that encapsulates a piece of functionality or a part of the UI.)
        - In the components create createTodo.jsx file. In this file we have created the function and exported, it is a modern way to export the function to other files.