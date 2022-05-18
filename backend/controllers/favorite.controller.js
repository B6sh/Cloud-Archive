const Favorite = require("../models/Favorite")
const User = require("../models/User")
const Book = require("../models/Book")

exports.getAllFavorites = async (req, res) => {
    Favorite.find({username: req.params.username}, async (err, found) => {
        if(err) throw err
        res.json(found)
        
    })
}
exports.deleteFromFavorites = async (req, res) => {
    Favorite.deleteOne({userId: req.body.userId,bookId: req.body.bookId}, (err, found) => {
        if(err) res.json({ deleted: false})
        if(found) res.json({ deleted: true})
        if(!found) res.json({ deleted: false})
    })
}

exports.addToFavorites = async (req, res) => {
    Favorite.findOne({userId: req.body.userId,bookId: req.body.bookId}, async (err, found) => {
        if(err) throw err
        if(found) res.json({
            created: false,
            message: "already in favorites" 
        })
        else{
            User.findOne({_id: req.body.userId}, async (err, result) => {
                if(err) throw err
                if(!result) res.json({
                    created: false,
                    message: "user doesn't exist" 
                })
                if(result){
                    Book.findOne({_id: req.body.bookId}, async (err, result1) => {
                        if(err) throw err
                        if(!result1) res.json({
                            created: false,
                            message: "book doesn't exist" 
                        })
                        if(result1){
                            const newEntry = new Favorite({
                                userId: req.body.userId,
                                bookId: req.body.bookId,
                              });
                              await newEntry.save();
                            res.json({
                                created: true
                            })
                        }
                    })
                }
            })
        }

    })
    


}