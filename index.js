const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const payerRoutes = require('./routes/payer.route')
const payerTypeRoutes = require('./routes/payer-type.route')

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

//CRUD routes
app.use('/payers', payerRoutes());
app.use('/payerTypes',payerTypeRoutes());

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));