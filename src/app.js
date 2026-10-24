const express = require('express');
const app = express();

app.use(express.json());

app.use('/directors', require('./routes/directorRoutes'));
app.use('/movies', require('./routes/movieRoutes'));
app.use('/stats', require('./routes/statsRoutes'));

app.use(require('./middlewares/errorHandler'));

module.exports = app;
