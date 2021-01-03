const express = require('express');
const appointment = require('../models/appointment.model');

const router = express.Router();

// GET home page.
router.get('/', async function(req, res) {
    const appoint = await appointment.allOfMentee(1);
    res.send("Hello World!");
});

module.exports = router;