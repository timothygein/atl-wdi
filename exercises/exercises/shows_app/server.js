const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/favorite-shows', (req, res) => {
    var favoriteShows = ['The Shield', 
    '24', 'The Sopranos', 'Seinfeld', 'Justified'];
    
    res.render('favorite-shows', {
        favoriteShows: favoriteShows
    })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});