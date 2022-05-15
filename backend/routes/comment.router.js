const express = require("express");
const router = express.Router();

// import controller
const commentControl = require("../controllers/comment.controller");


// routes to controller functions
router.get('/:bookId', commentControl.getAllCommentsByBookId);
router.post('/', commentControl.addCommentByBookId);



module.exports = router