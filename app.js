const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '/public');
const bootstrapPath = path.join(__dirname, '/node_modules/');

app.use(express.static(publicPath));
app.use(express.static(bootstrapPath));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
