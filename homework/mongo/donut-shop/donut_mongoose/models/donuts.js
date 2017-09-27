//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

//create your donut schema:
var donutSchema = new Schema({
    
    });






    const newDonut = new Schema ({
            name: "Chocolate Donut",
            description: "I am a chocolate donut.",
            img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
            price: 5,
            qty: 99
        }
    );

//export your donut with module.exports()
module.exports = {
    StudentModel: StudentModel,
    ProjectModel: ProjectModel
};