const express = require('express');
const router = express.Router();
const accessory = require('../services/accessoryService');

router.get('/create-page', (req, res) => {
    res.render('createAccessory')
});

router.post('/create', (req, res) => {
    accessory.addAccessory(req.body)
        .then(x => {
            console.log(x, '\naccessory has been added');
            res.redirect('/')
        })
});

router.get('/attach', (req, res) => {
    res.render('attachAccessory');
})

module.exports = router;