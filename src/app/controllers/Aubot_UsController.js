class AboutUsController {
    //GET  /about-us
    information(req, res) {
        const user = req.session.user;
        res.render('about_us/information',{ user: user });
    }
}

module.exports = new AboutUsController();
