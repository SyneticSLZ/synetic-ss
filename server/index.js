const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("server is running index js");
});

app.listen(5000, console.log("server started on PORT 1000"));