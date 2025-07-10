const { Joke } = require('../models');

// Function to add a new joke
exports.addJoke = async (req, res) => {
    try {
        console.log('Adding a new joke:', req.body);
        const { question, answer } = req.body;
        if (!question || !answer) {
            return res.status(400).json({ error: 'Question and answer are required' });
        }

        const joke = await Joke.create({ question, answer });
        res.status(201).json(joke);
    } catch (error) {
        console.error('Error adding joke:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Function to get all jokes
exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.status(200).json(jokes);
    } catch (error) {
        console.error('Error fetching jokes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Function to get a joke by ID
exports.getJokeById = async (req, res) => {
    const { id } = req.params;
    try {
        const joke = await Joke.findByPk(id);
        if (!joke) {
            return res.status(404).json({ error: 'Joke not found' });
        }
        res.status(200).json(joke);
    } catch (error) {
        console.error('Error fetching joke by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getRandomJoke = async (req, res) => {
    try {
        const total = await Joke.count();
        if (total === 0) {
            return res.status(404).json({ error: 'No jokes available' });
        }

        const randomIndex = Math.floor(Math.random() * total);
        const joke = await Joke.findOne({ offset: randomIndex });

        res.status(200).json(joke);
    } catch (error) {
        console.error('Error fetching random joke:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// delete all jokes
exports.deleteAllJokes = async (req, res) => {
    try {
        await Joke.destroy({ where: {} });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting jokes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}