/* PACKAGES */
const path = require('path')
const logger = require('morgan');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const router = express.Router();
/* app settings*/
const app = express();
const PORT = 3002

/*views*/
app.set('view engine', 'hbs');



/* controllers */


const pirateController = require('./controller/pirates.js')
app.use("/pirates", pirateController);

const newController = require('.controllers/new.js');
app.use("/new", newController);

/*home*/

/*start server*/

app.listen(PORT, () => {
    console.info('RUN UP SERVER @', PORT, "//",)
});