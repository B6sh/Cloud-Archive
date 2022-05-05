const express = require("express");
const router = express.Router();

// import controller
const bookControl = require("../controllers/book.controller")

router.get("/", bookControl.getAllBooks)

module.exports = router