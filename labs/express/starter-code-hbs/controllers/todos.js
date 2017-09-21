const express =  require("express");
const router = express.Router();
const data = require("../data.js");


/* INDEX TODOS */
router.get('/todos', function(req,res) {

    res.render('/todos/index', {
      todos: seededTodos
    });
});

/* NEW TODOS */
router.get('/new', (req, res) => {
    res.render('todos/new');
})

/* SHOW TODOS */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];
    console.log(todo);
    if (!todo){
    res.render('todos/show', {
        error: "No to-do found with this ID"
    })
    } else {
        res.render('todos/show', {
        todo: todo
    })
    }
})

router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.send("Successfully created a todo")
});

module.exports = router;