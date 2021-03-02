const express = require('express');
const router = express.Router();
const { login, fakeUser } = require('../controllers/userController');

router.route('/').post(login);
router.route('/users').get(fakeUser);

module.exports = router;
