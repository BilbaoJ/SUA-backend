const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller')

router.get('/user/:id', postsController.readPosts);

router.get('/:id', postsController.readOnePost);

router.post('/', postsController.createPost);

router.put('/:id', postsController.updatePost);

router.delete('/:id', postsController.deletePost);

module.exports = router;
