const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const { posts } = require ("../models")
router.post("/", validateToken, async (req, res) =>{
    const {title, description} = req.body;

    console.log("ID-----------------------------")

    await posts.create({
        title: title,
        description: description,
        userId: req.user.id
    })
    return res.json({ message: "Post creato"})

})


module.exports = router