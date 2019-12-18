const BookList = require('../../model/bookmodel')

module.exports = (app) => {
    app.post("/booklist", async (req, res) => {
        try {
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
            var result = await BookList.findById(req.params.id).exec();
            res.send(result);
        } catch(err) {
            res.status(500).send(err);
        }
    })
    
    app.put("/booklist/:id", async (request, response) => {
        try {
          var book = await BookList.findById(request.params.id).exec();
          book.set(request.body);
          var result = await book.save();
          response.send(result);
        } catch (error) {
          response.status(500).send(error);
        }
      });
    
    app.delete("/booklist/:id", async (req, res) => {
        try {
            await BookList.findByIdAndDelete(req.params.id)
            .then(books => {
                if(books) {
                    res.json({
                        error: false,
                        data: "Book has been deleted"
                    })
                } else {
                    res.json({
                        error: true,
                        data: "Book not found"
                    })
                }
            })
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