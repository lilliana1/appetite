const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    email: {type: String, required: true },
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
