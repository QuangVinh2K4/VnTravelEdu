const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Tour = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        main_image: { type: String, maxLength: 255 },
        img_1: { type: String },
        img_2: { type: String },
        img_3: { type: String },
        img_4: { type: String },
        first_day: { type: String, maxLength: 10000 },
        second_day: { type: String, maxLength: 10000 },
        third_day: { type: String, maxLength: 10000 },
        Starting_gate: { type: String, maxLength: 100 },
        destination: { type: String, maxLength: 100 },
        slug: { type: String },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Tour', Tour);
