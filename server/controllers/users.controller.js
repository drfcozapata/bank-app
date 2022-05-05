const { User } = require('../models/users.model.js');
const { catchAsync } = require('../utils/catchAsync');

const signupUser = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;

  const newUser = await User.create({
    name,
    password,
  });

  res.status(201).json({
    newUser,
  });
});

const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = await user.generateToken();

  res.status(200).json({
    status: 'success',
    token,
  });
});

const getUserHistory = catchAsync(async (req, res, next) => {
  const { user } = req;

  const transfers = await user.getTransfers();

  res.status(200).json({
    status: 'success',
    transfers,
  });
});

module.exports = {
  signupUser,
  loginUser,
  getUserHistory,
};
