const express = require('express');
const router = express.Router();
const MessagesController = require('../controllers/messagesController');
const messageModel = require('../models/messageModel');

const messagesController = new MessagesController(messageModel);

// Route to get all messages
router.get('/', messagesController.getAllMessages.bind(messagesController));

// Route to submit a new message
router.post('/', messagesController.submitMessage.bind(messagesController));

module.exports = router;