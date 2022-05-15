const mongoose = require("mongoose");

const Book = mongoose.Schema({
    title: {
        type: String,
    },
    authors: {
        type: String,
    },
    average_rating: {
        type: Number,
    },
    isbn: {
        type: String,
    },
    language_code: {
        type: String,
    },
    num_pages: {
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