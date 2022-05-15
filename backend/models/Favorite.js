const mongoose = require("mongoose");
const favorite = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  bookId: mongoose.Schema.Types.ObjectId,
  
});

module.exports = mongoose.model("Favorite", favorite);