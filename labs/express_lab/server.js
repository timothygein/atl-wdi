const express = require('express');
const app = express();
const hbs = require('hbs');

const router = express.router()

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.use('/math', mathController)

const PORT = 3001;
app.listen(PORT, () => {
    console.log("app is listening on 3001")
});