const Tour = require('../models/Tour');
const { mogoosesToObject } = require('../../util/mogoose');
class TourController {

    // [GET] /tours/:slug
    show(req, res, next) {
        const user = req.session.user;
        Tour.findOne({ slug: req.params.slug })
            .then((tour) =>
                res.render('tours/show', {
                    tour: mogoosesToObject(tour),
                    user: user,
                }),
            )
            .catch(next);
    }

    // [GET] /tours/create
    create(req, res) {
        const user = req.session.user;
        res.render('tours/create',{user:user});
    }
    //[GET] /tours/:slug/booking

    booking(req, res, next) {
        const user = req.session.user;
        Tour.findOne({ slug: req.params.slug })
            .then((tour) =>
                res.render('tours/booking', {
                    tour: mogoosesToObject(tour),
                    user: user,
                }),
            )
            .catch(next);
    }

    // [POST] /tours/store
    store(req, res, next) {
        const tour = new Tour(req.body);
        tour.save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                next(err);
            });
    }
}
module.exports = new TourController();
