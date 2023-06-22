const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const hbs = require('express-handlebars');
const helpers = require('handlebars-helpers')();
const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//HTTP Logger
app.use(morgan('combined'));
//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
const handlebars = hbs.create({
    extname: '.hbs',
});

Object.keys(helpers).forEach(function (helperName) {
    handlebars.handlebars.registerHelper(helperName, helpers[helperName]);
});
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'view'));

//Route init
route(app);

console.log('PATH: ', path.join(__dirname, 'resources\\views'));

app.listen(port, () => {
    console.log(`App listening on port at http://localhost:${port}`);
});
