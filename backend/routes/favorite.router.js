const express = require("express");
const router = express.Router();

// import controller
const favoriteControl = require("../controllers/favorite.controller");


// routes to controller functions
router.get('/:username', favoriteControl.getAllFavorites);
router.post('/', favoriteControl.addToFavorites);
router.delete('/', favoriteControl.deleteFromFavorites);



module.exports = router