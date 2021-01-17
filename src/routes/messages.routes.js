const router = require('express').Router();
const { connection } = require('../../connection');

// création d'un nouveau message
router.post('/', (req, res) => {
    const conversation_id = req.body.selectedConversation;
    const content = req.body.newMessage;
    connection.query('INSERT INTO message SET ?', { conversation_id, content }, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la création de la conversation.');
        } else {
            res.json(results);
        }
    })

})

// récupération de tous les messages d'une conversation
router.get('/:conversationId', (req, res) => {
    const conversationId = req.params.conversationId;
    connection.query('SELECT * FROM message WHERE conversation_id=?', conversationId, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des messages.');
        } else {
            res.json(results);
        }
    });
});


module.exports = router;