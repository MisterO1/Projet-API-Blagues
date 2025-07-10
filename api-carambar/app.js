const express = require('express');
const app = express();
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerConfig = require('./swagger/swaggerConfig');
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/api/v1/blagues', jokeRoutes); 
swaggerConfig(app); // Configuration de Swagger pour la documentation de l'API

module.exports = app;