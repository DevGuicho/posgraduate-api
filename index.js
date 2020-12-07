const express = require('express');
const usersApi = require('./routes/users');
const app = express();
const { config } = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//User Routes
usersApi(app);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.`);
});
