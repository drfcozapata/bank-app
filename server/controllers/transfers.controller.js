const { Transfer } = require('../models/transfers.model');
const { catchAsync } = require('../utils/catchAsync');

const createTransfer = catchAsync(async (req, res, next) => {
  const { user } = req;

  const newTransfer = await Transfer.create({
    user,
    ...req.body,
  });

  res.status(201).json({
    newTransfer,
  });
});

module.exports = { createTransfer };
