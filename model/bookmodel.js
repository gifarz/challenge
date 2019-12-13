const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost/booklist");

const BookList = Mongoose.model("book", {
    title: {
        type: String,
        required: [true, "title must be filled"],
        unique: true
    },
    author: {
        type: [String],
        required: [true, "author must be filled"]
    },
    published_date: Date,
    pages: Number,
    language: String,
    publisher_id: String
});

module.exports = BookList;