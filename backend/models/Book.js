const mongoose = require("mongoose");

const Book = mongoose.Schema({
    bookID: {
        type: Number
    },
    title: {
        type: String,
    },
    authors: {
        type: String,
    },
    avg_rating: {
        type: Number,
    },
    lang_code: {
        type: String,
    },
    pages: {
        type: Number,
    },
    ratings_count: {
        type: Number,
    },
    text_reviews_count: {
        type: Number,
    },
    publisher: {
        type: String,
    }
});


module.exports = mongoose.model("Book", Book);