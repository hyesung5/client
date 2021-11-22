const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 8001;
app.use(express.static("uploads"));

app.use(express.static(path.join(__dirname, "/views/build")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/views/build/index.html"));
});

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "/views/build/index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});