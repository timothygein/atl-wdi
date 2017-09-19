
var express = require('express');
var app     = express();
var port    = 3000;
app.get('/greeting', function(req, res) {
    console.log(req.query);

    var hbs = require('hbs');
    
    app.set("view engine", "hbs");
    app.set('views', './views');
    
    res.render('greeting', {
      data: req.query.saying
    });
});

app.get('/topping/:pepperoni', function(req, res, next) {
    
        res.send( // something );
    });

    app.get('/order/:amount/:size', function(req, res, next) {
        var numOfPies = 10;
        var sizeOfPie = medium;
             res.send( // something );
         });

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});