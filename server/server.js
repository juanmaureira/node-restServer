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

// user: juanmaureira
// pass: 21363660
// Mongo db URL
// Base de datos en la nube (mLab): mongodb+srv://juanmaureira:21363660@cluster0.g9a6z.mongodb.net/cafe
// Base de datos local:  mongodb://localhost:27017/cafe