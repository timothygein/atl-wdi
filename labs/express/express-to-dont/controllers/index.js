const express = require('express');
const router = express.Router();
const data = require('../models/data.js');

/* Show TODONTs Index */
router.get('/', (req, res) => {
    res.render('toDonts/index', {
      data: data.seededToDonts
    });
});
/* Show TODONTs New */
router.get('/new', (req, res) => {
    res.render('toDonts/new');
})
/* Show TODONTs Show */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todont = data.seededToDonts[id];
/* Show TODONTs Error */
    if (!todont) {
        res.render('toDonts/show', {
            error: "No to-donts found with this Id"
        });
    } else {
    res.render('toDonts/show', {
        todont: todont
    });
}
});
/* Show TODONTs Post */
router.post('/', (req, res) => {
    const newToDont = req.body
    data.seededToDonts.push(newToDont);
    res.redirect('/todonts'); 
    });

/* Show TODONTs Edit */
router.get('/:id/edit', (req, res) => {
    res.render('toDonts/edit', {
        todont: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    });
});


/* Show TODONTs Update */
router.put('/:id', (req, res) => {
    const todontToEdit = data.seededToDonts[req.params.id]
    todontToEdit.description = req.body.description;
    todontToEdit.urgent = req.body.urgent;

    res.redirect('/todonts');
})


/* Show TODONTs Delete */


module.exports = router