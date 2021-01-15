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
router.post('/', (req, res) => {
    connection.query('INSERT INTO conversation (is_open) VALUES (1)', (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la création de la conversation.');
        } else {
            res.json(results);
        }
    })

})

// clôture d'une conversation
router.put('/:conversationId', (req, res) => {
    const conversation_id = req.params.conversationId;
    connection.query('UPDATE conversation SET is_open = 0 where id = ?;', conversation_id, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des conversations.');
        } else {
            res.json(results);
        }
    });
});



module.exports = router;