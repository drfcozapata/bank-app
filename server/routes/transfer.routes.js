const express = require('express');

const { createTransfer } = require('../controllers/transfers.controller');

const router = express.Router();

router.post('/', createTransfer);

module.exports = { transfersRouter: router };
