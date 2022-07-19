const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
router.post('/signup', async(req, res) => {
    const { name, lastname, username, email, phone, password } = req.body;
    const user = new User({
        name,
        lastname,
        username,
        email,
        phone,
        password
    });

    await user.save((err, user) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                err: `Not able to save user to DB ${err}`
            });
        }
        res.json(user);
        // res.json({
        //     name: user.name,
        // });
    });
});

module.exports = router;