const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const hbs = require('express-handlebars');
const route = require('./routes');
const db =require('./config/db')

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));
//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','view'));

//Route init
route(app);

console.log('PATH: ', path.join(__dirname, 'resources\\views'));

app.listen(port, () => {
    console.log(`App listening on port at http://localhost:${port}`);
});
