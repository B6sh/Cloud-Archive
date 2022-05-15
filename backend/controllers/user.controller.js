const User = require("../models/User")

exports.getUserInfoByUsername = (req, res) => {
    User.findOne({username: req.params.username}, (err, result) => {
        if(err) res.json(null)
        if(!result) res.json(null)
        if(result) res.json({
            name: result.name,
            image: result.image,
            username: result.username,
            email: result.email
        })
    })
}

