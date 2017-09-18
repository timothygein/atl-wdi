var express = require('express'); // Loading the express module on our server
var app = express(); // Creates a new instance of express on our server


app.get('/', function(req, res) { 
  // when a request comes in at localhost:3000, it will respond 
});
app.get('/greeting', function(req, res) => { 
    res.send('Hey WDI 12')
});
app.get('/rihanna', function(req, res) => { 
    res.send('work work work work')
});
var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port ' + port);
}); // actualizing the line above