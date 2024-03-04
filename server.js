require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post('/submit-form', (req, res) => {
    const { name, message } = req.body;
    console.log(`Message recieved: Name:${name}, Message:${message}`);
    res.send('Thank you for your message!');
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
