const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const { posts, users } = require ("../models");
const { Op } = require("sequelize");
router.post("/", validateToken, async (req, res) =>{
    const {title, description} = req.body;

    console.log("ID-----------------------------")

    await posts.create({
        title: title,
        description: description,
        userId: req.user.id,
        status: "active"
    })
    return res.json({ message: "Post creato"})

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