const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const { posts, users } = require ("../models");
const { Op } = require("sequelize");



router.post("/", validateToken, async (req, res) =>{
    const {title, description} = req.body;

    console.log("ID-----------------------------")

    let post = await posts.create({
        title: title,
        description: description,
        userId: req.user.id,
        status: "active"
    })
    return res.json(post)
})
router.get("/:username", validateToken, async (req, res) => {
    const {username} = req.params;
    let user = await users.findOne({
        where: {
            username: username,
        }
    })
    if(!user) {
        return res.json({error: "user inesistente"})
    }
    let userPosts = await posts.findAll({
        where: {
            userId: user.id,
            status: "active"
        }
    })
    return res.json(userPosts)
})
router.delete("/:id", validateToken, async (req, res)=>{
    const {id} = req.params;
    await posts.update(
    {
        status:"deleted"
    },
    {
        where: {
            id: id
        }
    }
    )
    return res.json({message:"Post eliminato"})
})


router.get("/",validateToken, async (req, res)=> {
    let allPosts = await posts.findAll({
        where: {
            status: {
                [Op.not]: "deleted"
            }
        },
        
        include: [{
            model: users,
            attributes: ["username"]
        }]
    })
    return res.json(allPosts)
})


module.exports = router