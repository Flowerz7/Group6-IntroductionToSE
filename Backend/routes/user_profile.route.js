const express = require('express');
const profileModal = require('../models/user_profile.model');
const router = express.Router();

router.get('/:id', async function(req, res) {
    const profile = await profileModal.singleByID(+req.params.id);
    res.json(
        profile
    )
});

module.exports = router;