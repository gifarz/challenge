const BookList = require('../../model/bookmodel')

module.exports = (app) => {
    app.post("/booklist", async (req, res) => {
        try {;
            var book = new BookList(req.body);
            var result = await book.save();
            res.send(result);
        } catch(err) {
            res.status(500).send(err);
        }
    })
    
    app.get("/booklist", async (req, res) => {
        try {
            var result = await BookList.find().exec();
            res.send(result);
        } catch(err) {
            res.status(500).send(err);
        }
    })
    
    app.get("/booklist/:id", async (req, res) => {
        try {
            var result = await BookList.find().exec();
            res.send(result);
        } catch(err) {
            res.status(500).send(err);
        }
    })
    
    app.put("/booklist/:id", async (req, res) => {
        try {
            var result = await BookList.findById(req.params.id).exec();
            res.send(result);
        } catch(err) {
            res.status(500).send(err);
        }
    })
    
    app.delete("/booklist/:id", async (req, res) => {
        try {
            var result = await BookList.deleteOne({_id:req.params.id}).exec();
            res.send(result);
        } catch(err) {
            res.status(500).send(err);
        }
    })

    // Error Handler 404
    app.use(function(req, res, next){
        return res.status(404).send({
            status: 404,
            message: "Not Found"
        });
    })

    // Error Handler 500
    app.use(function(err, req, res, next){
        return res.status(500).send(err);
    })

    // 
}