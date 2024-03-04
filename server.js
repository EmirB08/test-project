require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const Message = require("./models/message");

app.post("/submit-form", async (req, res) => {
	const { name, message } = req.body;

	const newMessage = new Message({ name, message });
	await newMessage.save();

	console.log(`Saved a message from ${name}`);
	res.send("Message submitted successfully!");
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
