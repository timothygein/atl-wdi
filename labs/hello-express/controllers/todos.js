app.get('/todos', function(req, res){
    const todos = ["Do laundry", "Cook food"]
});

app.get('/todos/:id', function(req, res){
    //do stuff
});

app.get('/todos/:id/edit', function(req, res){
    //do stuff
});