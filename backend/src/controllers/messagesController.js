class MessagesController {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }

    async getAllMessages(req, res) {
        try {
            const messages = await this.messageModel.find().sort({ createdAt: -1 });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving messages', error });
        }
    }

    async submitMessage(req, res) {
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ message: 'Message content is required' });
        }

        try {
            const newMessage = new this.messageModel({ content });
            await newMessage.save();
            res.status(201).json(newMessage);
        } catch (error) {
            console.error('Error submitting message:', error);
            res.status(500).json({ message: 'Error submitting message', error });
        }
    }
}

module.exports = MessagesController;