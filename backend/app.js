require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./models/User")
const cookieParser = require("cookie-parser");

const port = process.env.PORT
const app = express();


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, (err) => {
  console.log('mongoDB database is connected')
});


// Global Middleware
const publicPath = path.join(__dirname, "/");
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

// AUTH
app.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/auth/signup", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/auth/info", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});





// Routes
app.use("/book", require("./routes/book.router"));
app.use("/user", require("./routes/user.router"))









// Start express server
app.listen(port, function() {
  console.log(`Server started on http://localhost:${port}`);
});