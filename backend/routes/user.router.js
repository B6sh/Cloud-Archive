const express = require("express");
const router = express.Router();

// import controller
const userControl = require("../controllers/user.controller");


// routes to controller functions

router.get('/:username', userControl.getUserInfoByUsername)



module.exports = router