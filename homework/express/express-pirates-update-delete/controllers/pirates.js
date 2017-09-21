//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');
//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// EDIT
router.get('/:id/edit', function(req, res){
    res.render('pirates/edit', {
      pirates: {
        id: req.params.id,
        name: pirates[req.params.id].description,
		birthplace: pirates[req.params.id].description,
		death_year: pirates[req.params.id].description,
		base: pirates[req.params.id].description,
		nickname: pirates[req.params.id].description,
      }
    });
  });
//==============================

//==============================
// UPDATE
router.put('/:id', function(req, res) {
	var piratesEdit = data.seededPirates[req.params.id];

	piratesToEdit.description = req.body.description;
	piratesToEdit.urgent = req.body.urgent;

	res.redirect('/pirates');
})
//==============================

//==============================
// DESTROY
router.delete('/:id', function(req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/pirates');  // redirect back to the index route
});
//==============================

//==============================
// EXPORTS
//==============================

module.exports = router;
