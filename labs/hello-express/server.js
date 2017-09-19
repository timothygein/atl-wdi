const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/greeting', (req, res) => {
  console.log(req.query);
  
  res.render("greeting", {
    saying: req.query.saying,
    name: "Jamie"
  });
});

app.get('/favorite-foods', (req, res) => {
    var favoriteFoods = ["Jeni's Almond Butter ice cream", 
    'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 
    'Croissants from Bottega Louie in Downtown Los Angeles', 
    'Pizza from Little Star in San Francisco'];
    
    res.render('favorite-foods', {
      favoriteFoods: favoriteFoods
  })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});