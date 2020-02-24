const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    username: String,
    restaurantName: String,
    restaurantId: String,
    rating: Number,
    Review: String,
});



module.exports = mongoose.model('Review', Review);
