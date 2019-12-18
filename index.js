const Express = require("express");
// const bodyParser = require("body-parser"); 
const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost/booklist", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

var app = Express();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(Express.json());

require('./app/routes/routes.js')(app);

app.listen(3000, () => {
    console.log("Listening at PORT 3000...")
})