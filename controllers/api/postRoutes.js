 
const router = require('express').Router();
const { Post } = require('../../models');
//const sequelize = require('../config/connection');//
const withAuth = require('../../utils/auth');

// Gets every posts
router.get('/', (req, res) => {
    Post.findAll({})
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//Gets posts by ID
router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//Posting posts
router.post('/', withAuth, async (req, res) => {
    const body = req.body
 try {
    const newPost = await Post.create({...body, userId:req.session.userId});
    res.json(newPost)
    console.log(newPost)
 }
 catch (err){
    res.status(500).json(err)
 }
  
});



module.exports = router;
