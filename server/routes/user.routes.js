const express = require('express');

const {
  signupUser,
  loginUser,
  getUserHistory,
} = require('../controllers/users.controller');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/:id/history', getUserHistory);

module.exports = { usersRouter: router };
