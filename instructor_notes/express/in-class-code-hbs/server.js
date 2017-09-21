
/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
var todosController = require('./controllers/todos_controller.js');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

// include the method-override package
var methodOverride = require('method-override');
//...
// after the app has been defined
// use methodOverride.  We will be adding a query parameter to our delete form named _method

app.use(methodOverride('_method'));
// log
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( logger('dev'));
app.use('/todos', todosController);

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
