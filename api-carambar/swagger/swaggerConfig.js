const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition : {
        openapi: '3.0.0',
        info: {
            title: 'API de blagues Quotidien de devs',
            version: '1.0.0',
            description: 'Documentation de l\'API pour gérer les blagues Quotidien de devs',
        }
    },
    apis : ['./routes/*.js'], // Chemin vers les fichiers de routes
}

const specs = swaggerJSDoc(options); // Lecture et génération de la documentation Swagger

// Exportation de la configuration Swagger
module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)) // Configuration de Swagger UI
}