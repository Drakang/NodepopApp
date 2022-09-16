const mongoose = require('mongoose');
const dotenv= require("dotenv")
dotenv.config()

mongoose.connection.on('error', err => {
  console.log('Error de conexión', err);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect(process.env.MONGO_CONNECTION);

module.exports = mongoose.connection;