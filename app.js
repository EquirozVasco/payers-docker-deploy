const express = require('express');
const bodyparser = require('body-parser');
const payerRoutes = require('./routes/payer.route')
const payerTypeRoutes = require('./routes/payer-type.route')

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/payers', payerRoutes());
app.use('/payerTypes',payerTypeRoutes());

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });

module.exports = app;