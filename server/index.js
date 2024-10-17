const express = require("express");
const app = express()
const cors=require("cors");


const db = require('./models');

require('dotenv').config()

app.use(express.json())
app.use(cors());
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const postRouter = require('./routes/posts')
app.use('/posts', postRouter) 
const postsLikesRouter = require('./routes/postsLikes')
app.use('/postsLikes', postsLikesRouter) 
const PostCommentsRouter = require('./routes/PostComments')
app.use('/PostsComments', PostCommentsRouter) 
db.sequelize.sync().then(() => {

app.listen(5555, ()=> {
    console.log("server.running on PORT 5555")
})
})
