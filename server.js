const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/submit-form", (req, res) => {
	const { name, email, message } = req.body;
	console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
	res.send("Form submitted successfully!");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");

const mongoose = require("mongoose");
const uri = "yourMongoDBAtlasConnectionURIHere";

mongoose
	.connect(uri)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("MongoDB connection error:", err));
