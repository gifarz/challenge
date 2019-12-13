const Express = require("express");
const bodyParser = require("body-parser");
// const Mongoose = require("mongoose");

var app = Express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes/routes.js')(app);

// Mongoose.connect("mongodb://localhost/booklist");

// const BookList = Mongoose.model("book", {
//     title: {
//         type: String,
//         required: [true, 'title must be filled']
//     },
//     author: {
//         type: [String],
//         required: true,
//     },
//     published_date: Date,
//     pages: Number,
//     language: String,
//     publisher_id: String
// });

// app.post("/booklist", async (req, res) => {
//     try {;
//         var book = new BookList(req.body);
//         var result = await book.save();
//         res.send(result);
//     } catch(err) {
//         res.status(500).send(err);
//     }
// })

// app.get("/booklist", async (req, res) => {
//     try {
//         var result = await BookList.find().exec();
//         res.send(result);
//     } catch(err) {
//         res.status(500).send(err);
//     }
// })

// app.get("/booklist/:id", async (req, res) => {
//     try {
//         var result = await BookList.findById(req.params.id).exec();
//         res.send(result);
//     } catch(err) {
//         res.status(500).send(err);
//     }
// })

// app.put("/booklist/:id", async (req, res) => {
//     try {
//         var result = await BookList.findById(req.params.id).exec();
//         res.send(result);
//     } catch(err) {
//         res.status(500).send(err);
//     }
// })

// app.delete("/booklist/:id", async (req, res) => {
//     try {
//         var result = await BookList.deleteOne({_id:req.params.id}).exec();
//         res.send(result);
//     } catch(err) {
//         res.status(500).send(err);
//     }
// })

app.listen(3000, () => {
    console.log("Listening at PORT 3000...")
})