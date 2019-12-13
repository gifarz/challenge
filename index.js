const Express = require("express");
const bodyParser = require("body-parser");

var app = Express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes/routes.js')(app);

app.listen(3000, () => {
    console.log("Listening at PORT 3000...")
})