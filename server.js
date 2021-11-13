const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("./static", express.static(path.resolve(__dirname, "docs", "static")));

app.get("./*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "docs", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));