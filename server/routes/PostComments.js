const express = require("express");
const { validateToken } = require("../middlewares/Authentication");
const {PostComments} = require("../models");

const router = express.Router();

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