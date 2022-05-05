require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const mongoose = require("mongoose");

const port = process.env.PORT
const app = express();

// Global Middleware
const publicPath = path.join(__dirname, "/");
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.use("/book", require("./routes/book.router"));







// Connect to DB
mongoose.connect(process.env.DB_CONNECTION);


// Start express server
app.listen(3000, function() {
  console.log(`Server started on http://localhost:${port}`);
});