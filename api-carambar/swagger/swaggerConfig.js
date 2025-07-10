const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition : {
        openapi: '3.0.0',
        info: {
            title: 'API de blagues Carambar',
            version: '1.0.0',
            description: 'Documentation de l\'API pour gérer les blagues Carambar',
        }
    },
    apis : ['./routes/*.js'], // Chemin vers les fichiers de routes
}

const specs = swaggerJSDoc(options); // Génération de la documentation Swagger

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)) // Configuration de Swagger UI
}
// Pour utiliser cette configuration, il faut l'importer dans le fichier principal de l'application (par exemple, app.js ou server.js) et l'appeler avec l'instance de l'application Express.
