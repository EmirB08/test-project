const mongoose = require("mongoose"); // schema for mongoDB

const messageSchema = new mongoose.Schema({
	name: String,
	message: String,
	submittedAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
