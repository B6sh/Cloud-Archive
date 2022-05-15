const mongoose = require("mongoose");

const comment = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId
    },
    comment: {
        type: String,
    },
});


module.exports = mongoose.model("Comment", comment);