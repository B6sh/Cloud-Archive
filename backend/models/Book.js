const mongoose = require("mongoose");

const Book = mongoose.Schema({
	title: {
        type: String,
    },
    authors: {
        type: String, 
    },
    avg_rating:{
        type: Number, 
    },
    lang_code:{
        type: String, 
    },
    pages:{
        type: Number, 
    },
    publication_date:{
        type: Date, 
    },
    publisher:{
        type: String, 
    }
});


module.exports = mongoose.model("Book", Book);