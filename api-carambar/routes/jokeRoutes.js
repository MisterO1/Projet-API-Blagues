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