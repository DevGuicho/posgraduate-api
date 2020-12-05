const express = require('express');
const usersApi = require('./routes/users');
const app = express();
const { config } = require('./config');

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//User Routes
usersApi(app);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.`);
});
