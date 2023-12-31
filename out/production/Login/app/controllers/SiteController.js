const Course = require('../models/Course')
class SiteController {
     index(req, res, next) {
        Course.find({})
            .then(courses=> {
                courses =courses.map(course => course.toObject())
                res.render('home',{courses})
            })
            .catch(next)
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
