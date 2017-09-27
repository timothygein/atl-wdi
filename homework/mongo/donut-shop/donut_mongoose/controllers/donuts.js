//======================
// REQUIREMENTS
//======================
const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const DonutShop = Schema.DonutModel;


//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
        DonutShop.find({})
            .then((donuts) => {
    
               
                response.render('donuts/index', {
                    donuts: donuts
                })
            })
            .catch((error) => {
                console.log(error)
            })



//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) => {

        response.render('donut/new')
    })


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response) => {
        const DonutsId = request.params.id
         
        DonutShop.findById(donutId)
            .then((donut) => {
                response.render('donut/show', {
                    donut: donut
                })
            })
            .catch((error) => {
                console.log(error)
            })
    
    })
    



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"

router.post('/', (request, response) => {
        const newDonut = request.body
    
        DonutShop.create(newDonut)
            .then(() => {
                response.redirect('/donuts')
            })
            .catch((error) => {
                console.log(error)
            })
    })
    



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response) => {

        const donutId = request.params.id
    
        DonutShop.findById(donutId)
            .then((donut) => {
                response.render('donut/edit', {
                    donut: donut
                })
            })
            .catch((error) => {
                console.log(error)
            })
    
    })


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)

router.put('/:id', (request, response) => {
    
        const donutIdToUpdate = request.params.id

        const updatedDonut = request.body

        DonutShop.findByIdAndUpdate(donutIdToUpdate, updatedDonut, { new: true })
            .then(() => {
    
                response.redirect(`/donuts/${donutIdToUpdate}`)
            })
            .catch((error) => {
                console.log(error)
            })
    })

//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"

router.get('/:id/delete', (request, response) => {
    
        const donutId = request.params.id
    
        DonutShop.findByIdAndRemove(donutId)
            .then((donut) => {
                
                response.redirect('/donuts')
            })
            .catch((error) => {
                console.log(error)
            })
    })

//======================
// EXPORTS
//======================
module.exports = router 