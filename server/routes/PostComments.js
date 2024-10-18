const express = require("express");
const { validateToken } = require("../middlewares/Authentication");
const {PostComments} = require("../models");

const router = express.Router();
router.get("/:postId", validateToken, async(req, res)=>{
    const {postId}= req.params

    let allComments = await PostComments.findAll({
        where:{
            postId : postId,
        }
    });
    return res.json(allComments) 
})
router.post("/", validateToken, async(req, res) => {
    const {comment, postId} = req.body;

    let newComment = await PostComments.create({
        comment: comment,
        userId: req?.user?.id,
        postId: postId,

    });
    return res.json(newComment)
} )

module.exports = router;