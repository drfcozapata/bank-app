const express = require('express');
const cors = require('cors');
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routers
const { usersRouter } = require('./routes/user.routes');
const { transfersRouter } = require('./routes/transfer.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoints
app.use('api/v1/users', usersRouter);
app.use('api/v1/transfers', transfersRouter);

app.use('*', globalErrorHandler);

module.exports = { app };
