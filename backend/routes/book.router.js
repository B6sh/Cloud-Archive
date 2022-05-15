const express = require("express");
const router = express.Router();

// import controller
const bookControl = require("../controllers/book.controller")

// routes to controller functions
router.get("/", bookControl.getAllBooks)
router.get("/:id", bookControl.getBookById)

module.exports = router