const mongoose = require("mongoose");

const comment = mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId
    },
    comment: {
        type: String,
    },
});


module.exports = mongoose.model("Comment", comment);
