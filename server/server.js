const { app } = require('./app');
const { db } = require('./utils/database');

const { User } = require('./models/users.model');
const { Transfer } = require('./models/transfers.model');

db.authenticate()
  .then(() =>
    console.log('Connection with DB has been established successfully.')
  )
  .catch(err => console.log('Unable to connect to the database:', err));

db.sync()
  .then(() => console.log('Database has been synced successfully.'))
  .catch(err => console.log('Unable to sync database:', err));

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
