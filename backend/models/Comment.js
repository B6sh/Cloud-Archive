const mongoose = require("mongoose");

const Comment = mongoose.Schema({
    bookID: {
        type: Number
    },
    comment: {
        type: String,
    },
});


module.exports = mongoose.model("Comment", Comment);