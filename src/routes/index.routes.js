const router = require('express').Router();
const cors = require('cors');
const conversationsRouter = require('./conversations.routes');
const messagesRouter = require('./messages.routes');

const ALLOWED_ORIGINS = process.env.CLIENT_APP_ORIGIN.split(',');

const corsOptions = {
  origin: ALLOWED_ORIGINS,
};

router.use(cors(corsOptions));
router.use('/conversations', conversationsRouter);
router.use('/messages', messagesRouter);


module.exports = router;