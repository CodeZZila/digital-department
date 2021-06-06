const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const {secret} = require('../config/config-jwt');

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    };

    return jwt.sign(payload, secret, {expiresIn: "24h"});
};

class authController {

    loginPage(req, res) {
        res.render('login');
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if (!user) {
                return res.sendStatus(400).json({message: `Пользователь ${username} не найден`});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.sendStatus(400).json({message: `Введен неверный пароль`});
            }
            const token = generateAccessToken(user._id, user.role);
            module.exports.tok = token;

            if (user.role === 'ADMIN')
                return res.redirect('/admin');
            else if (user.role === 'TEACHER')
                return res.redirect('/teacher');

            return res.redirect('/');
        } catch (e) {
            console.log(e)
            res.sendStatus(400).json({message: 'Login error'})
        }
    }
}

module.exports = new authController();