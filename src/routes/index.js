const newsRouter = require('./news');
const siteRouter = require('./site');
const toursRouter = require('./tours');
const usersRouter = require('./users');
const about_us_Router = require('./about_us');
const session = require('express-session');
function route(app) {
    app.use(
        session({
            secret: 'my-secret',
            resave: false,
            saveUninitialized: false,
        }),
    );
    app.use('/users', usersRouter);
    app.use('/about-us', about_us_Router);
    app.use('/news', newsRouter);
    app.use('/tours', toursRouter);
    app.use('/', siteRouter);
}
module.exports = route;
