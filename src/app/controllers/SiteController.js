const Tour = require('../models/Tour');
const { multipleMogoosesToObject } = require('../../util/mogoose');
class SiteController {
    index(req, res, next) {
        const user = req.session.user;
        Tour.find({})
            .then((tours) => {
                res.render('home', {
                    tours: multipleMogoosesToObject(tours),
                    user: user, // Gộp user vào đối tượng options
                });
            })
            .catch(next);
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
