/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         question:
 *           type: string
 *         answer:
 *           type: string
 * tags:
 *   name: Blagues
 *   description: API des blagues Quotidien de devs
 */

/**
 * @swagger
 * /api/v1/jokes:
 *   get:
 *     summary: Retourne la liste des blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur interne du serveur
 */

/**
 * @swagger
 * /api/v1/jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur interne du serveur
 */

/**
 * @swagger
 * /api/v1/jokes/{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: une blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur interne du serveur
 */

/**
 * @swagger
 * /api/v1/jokes:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: Blague créée
 *       400:
 *         description: question et réponse sont requis
 *       500:
 *         description: Erreur interne du serveur
 */
