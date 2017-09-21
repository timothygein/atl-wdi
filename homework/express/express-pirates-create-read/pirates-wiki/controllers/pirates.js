//requirements
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');

//all routes for pirate */

/*INDEX*/

router.get('/', (req, res) => {
    router.post();
})
/* new */
router.get('/new', (req, res) => {
    res.render('pirates/new');
})

/*SHOW*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pirates = pirates.pirates[id];
    console.log(pirates)
})
/*CREATE */
router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    data.piratesList.push(newPirate);
    res.redirect('/index');
})


//exports
module.exports = router;