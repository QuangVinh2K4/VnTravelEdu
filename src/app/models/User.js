const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
//
mongoose.plugin(slug);
// //
const Schema = mongoose.Schema;
//
const User = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
});

module.exports = mongoose.model('User', User);
