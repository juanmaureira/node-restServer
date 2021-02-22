require('./config/config.js');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(require('./controlador/usuario'));

mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,  useNewUrlParser: true, useCreateIndex: true }, (e, resp) => {
  if(e) throw e;
  console.log('Base de datos online');
});

app.listen(process.env.PORT, () => {
  console.log('Escuchando en puerto 3000');
});

