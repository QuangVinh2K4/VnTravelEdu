const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
//
mongoose.plugin(slug);
// //
const Schema = mongoose.Schema;
//
const User_Information = new Schema({
    user_id: {
        type: String,
    },
    user_avatar: {
        type: String,
    },
    phone: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    website: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    github: {
        type: String,
    },
});

module.exports = mongoose.model('User_Information', User_Information);
