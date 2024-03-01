require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const Message = require("./models/message");

app.post("/submit-form", async (req, res) => {
	const { name, email, message } = req.body;

	const newMessage = new Message({ name, email, message });
	await newMessage.save();

	console.log(`Saved a message from ${name} with email ${email}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

mongoose
	.connect(uri)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("MongoDB connection error:", err));
