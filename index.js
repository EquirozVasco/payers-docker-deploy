const app = require('./app')
const sequelize = require('./util/database');

sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));