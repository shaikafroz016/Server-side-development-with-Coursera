const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var urlSchema = new Schema({
    url: {
        type: String,
    },
    description:{
        type:String
    },
    dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }
})

var urls = mongoose.model('url', urlSchema);
module.exports = urls;