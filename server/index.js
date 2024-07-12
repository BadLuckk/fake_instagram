const express = require("express");
const app = express()

app.use(express.json())

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(5555, ()=> (
    console.log("server.running on PORT 5555")
))