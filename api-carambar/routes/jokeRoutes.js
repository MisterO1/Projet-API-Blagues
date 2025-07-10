const express = require('express');
const router = express.Router();

const { addJoke,
        getAllJokes, 
        getJokeById, 
        getRandomJoke,
        deleteAllJokes
    } = require('../controllers/jokeControllers');

router.post('/', addJoke);
router.get('/', getAllJokes);
router.get('/random', getRandomJoke);
router.delete('/', deleteAllJokes);
router.get('/:id', getJokeById);

module.exports = router;

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Retourne toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Retourne une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague à retourner
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blague trouvée
 *       404:
 *         description: Blague non trouvée
 */