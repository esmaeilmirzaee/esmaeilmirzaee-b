const express = require('express');
const router = express.Router();
const { login, fakeUser } = require('../controllers/userController');

router.route('/').post(login);
router.route('/').get(fakeUser);

module.exports = router;
