const User = require('../models/User');
const User_Information = require('../models/User_Information');
const bcrypt = require('bcryptjs');
class UserController {
    async check(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                bcrypt.compare(
                    req.body.password,
                    user.password,
                    (err, result) => {
                        if (err) {
                            // Xử lý lỗi khi so sánh mật khẩu
                            res.status(500).send('Lỗi khi so sánh mật khẩu');
                        } else if (result && user.name === req.body.name) {
                            req.session.user = user;
                            res.redirect('/');
                        } else {
                            // Mật khẩu hoặc tên sai, trả về thông báo lỗi cho người dùng
                            res.send('Mật khẩu hoặc tên sai');
                        }
                    },
                );
            } else {
                // Không tìm thấy người dùng, trả về thông báo lỗi cho người dùng
                res.send('Không tìm thấy người dùng');
            }
        } catch (err) {
            // Xử lý lỗi khi tìm kiếm người dùng
            res.status(500).send('Lỗi khi tìm kiếm người dùng');
        }
    }

    // [GET] /tours/:create
    create(req, res) {
        res.render('users/SignUp-and-SignIn');
    }
    information(req, res) {
        const user = req.session.user;
        res.render('users/information', { user: user });
    }
    SaveAccount(req, res) {
        const data = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        };

        User.findOne({ email: data.email }).then((existingUser) => {
            if (existingUser) {
                // Email đã được sử dụng, trả về thông báo lỗi cho người dùng
                res.status(400).send('Email đã được sử dụng');
            } else {
                // Email chưa được sử dụng, mã hóa mật khẩu và lưu trữ tài khoản mới
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(data.password, salt, (err, hash) => {
                        if (err) {
                            // Xử lý lỗi khi mã hóa mật khẩu
                            res.status(500).send('Lỗi khi mã hóa mật khẩu');
                        } else {
                            // Mã hóa mật khẩu thành công, tạo tài khoản mới
                            const user = new User({
                                email: data.email,
                                name: data.name,
                                password: hash,
                            });
                            user.save();
                            // .then(() => res.redirect('/'))
                            // .catch((err) => {
                            //     // Xử lý lỗi khi lưu trữ tài khoản mới
                            //     res.status(500).send(
                            //         'Lỗi khi lưu trữ tài khoản mới',
                            //     );
                            // });
                            const user_information = new User_Information({
                                user_id: user._id,
                            });
                            user_information
                                .save()
                                .then(() => res.redirect('/'))
                                .catch((err) => {
                                    // Xử lý lỗi khi lưu trữ tài khoản mới
                                    res.status(500).send(
                                        'Lỗi khi lưu trữ tài khoản mới',
                                    );
                                });
                        }
                    });
                });
            }
        });
    }
}

module.exports = new UserController();
