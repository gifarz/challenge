const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost/booklist");

const BookList = Mongoose.model("book", {
    title: String,
    author: [String],
    published_date: Date,
    pages: Number,
    language: String,
    publisher_id: String
});

module.exports = BookList;