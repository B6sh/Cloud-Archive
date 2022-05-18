const Book = require("../models/Book")

exports.getAllBooks = async (req, res) => {
    const books = await Book.find()
    res.json(books)
}

exports.getBookById = async (req, res) => {
    Book.findOne({_id: req.params.id}, (err, result) => {
        if(err) res.json(result)
        res.json(result)
    })
}