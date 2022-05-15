const Book = require("../models/Book")
const User = require("../models/User")
const Comment = require("../models/Comment")


exports.getAllCommentsByBookId = async (req, res) => {
    Comment.find({bookId: req.params.bookId} ,(err, result) => {
        if(err) throw err
        res.json(result)
    })
}

exports.addCommentByBookId = async (req,res) => {
    Book.findOne({_id: req.body.bookId}, async (err, result1) => {
        if(err) throw err
        if(!result1) res.json({
            created: false,
            message: "book doesn't exist" 
        })
        if(result1){
            const newEntry = new Comment({
                userId: req.body.userId,
                bookId: req.body.bookId,
                comment: req.body.comment
              });
              await Comment.insertMany(newEntry);
            res.json({
                created: true
            })
        }
    })
}