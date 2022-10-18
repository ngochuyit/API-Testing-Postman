const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
    ]
})

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    publisheDate: {
        type:String,
    },
    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
});
 const Book = mongoose.model("Book", bookSchema);
 const Author = mongoose.model("Author", authorSchema);
 module.exports = { Book, Author };