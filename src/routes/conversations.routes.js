const router = require('express').Router();
const { connection } = require('../../connection');

// récupération de toutes les conversations
router.get('/', (req, res) => {
    connection.query('SELECT * FROM conversation ORDER BY id', (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des conversations.');
        } else {
            res.json(results);
        }
    });
});

// récupération de toutes les conversations ouvertes
router.get('/open', (req, res) => {
    connection.query('SELECT * FROM conversation WHERE is_open = 1 ORDER BY id', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération des conversations.`);
        } else {
            res.json(results);
        }
    });
});


// création d'une nouvelle conversation


// clôture d'une conversation



module.exports = router;