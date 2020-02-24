const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    username: String,
    rating: Number,
    Review: String,
});



module.exports = mongoose.model('Review', Review);
